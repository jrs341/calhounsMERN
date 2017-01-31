var docusign = require('docusign-esign');
var async = require('async');

var integratorKey = 'c6481b7c-385b-41b2-80b0-b1b3484b0a89';                    // Integrator Key associated with your DocuSign Integration
var email = 'jrs341@me.com';                     // Email for your DocuSign Account
var password = 'qtpucjm6';               // Password for your DocuSign Account
var docusignEnv = 'demo';                     // DocuSign Environment generally demo for testing purposes
var fullName = 'Jason Sinn';                   // Recipient's Full Name
var recipientEmail = 'calhoun@calhounsrvretreats.com'; // Recipient's Email
var templateId = '4cc7d74a-f09f-4d2b-8eda-39e975b1db02';                       // ID of the Template you want to create the Envelope with
var templateRoleName = 'Sender';                 // Role Name of the Template, Sender or Self https://www.docusign.com/blog/quick-tip-tuesday-template-role-shortcuts/

var baseUrl = 'https://' + docusignEnv + '.docusign.net/restapi';

// initialize the api client
var apiClient = new docusign.ApiClient();
apiClient.setBasePath(baseUrl);

// create JSON formatted auth header
var creds = JSON.stringify({
  Username: email,
  Password: password,
  IntegratorKey: integratorKey
});
apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

// assign api client to the Configuration object
docusign.Configuration.default.setDefaultApiClient(apiClient);

async.waterfall([
  function login (next) {
    // login call available off the AuthenticationApi
    var authApi = new docusign.AuthenticationApi();

    // login has some optional parameters we can set
    var loginOps = new authApi.LoginOptions();
    loginOps.setApiPassword('true');
    loginOps.setIncludeAccountIdGuid('true');
    authApi.login(loginOps, function (err, loginInfo, response) {
      if (err) {
        return next(err);
      }
      if (loginInfo) {
        // list of user account(s)
        // note that a given user may be a member of multiple accounts
        var loginAccounts = loginInfo.getLoginAccounts();
        console.log('LoginInformation: ' + JSON.stringify(loginAccounts));
        var loginAccount = loginAccounts[0];
        var accountId = loginAccount.accountId;
        var baseUrl = loginAccount.baseUrl;
        var accountDomain = baseUrl.split("/v2");

        // below code required for production, no effect in demo (same domain)
        apiClient.setBasePath(accountDomain[0]);
        docusign.Configuration.default.setDefaultApiClient(apiClient);
        next(null, loginAccount);
      }
    });
  },

  function sendTemplate (loginAccount, next) {
    // create a new envelope object that we will manage the signature request through
    var envDef = new docusign.EnvelopeDefinition();
    envDef.setEmailSubject('Please sign this document sent from Node SDK');
    envDef.setTemplateId(templateId);

    // create a template role with a valid templateId and roleName and assign signer info
    var tRole = new docusign.TemplateRole();
    tRole.setRoleName(templateRoleName);
    tRole.setName(fullName);
    tRole.setEmail(recipientEmail);

    // create a list of template roles and add our newly created role
    var templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.setTemplateRoles(templateRolesList);

    // send the envelope by setting |status| to 'sent'. To save as a draft set to 'created'
    envDef.setStatus('sent');

    // use the |accountId| we retrieved through the Login API to create the Envelope
    var accountId = loginAccount.accountId;

    // instantiate a new EnvelopesApi object
    var envelopesApi = new docusign.EnvelopesApi();

    // call the createEnvelope() API
    envelopesApi.createEnvelope(accountId, envDef, null, function (err, envelopeSummary, response) {
      if (err) {
        return next(err);
      }
      console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
      next(null);
    });
  }

], function end (error) {
  if (error) {
    console.log('Error: ', error);
    process.exit(1);
  }
  process.exit();
});