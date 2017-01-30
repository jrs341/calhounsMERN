var request = require('request');

var url = "https://demo.docusign.net/restapi/v2/login_information";
var body = "";	// no request body for login api call
var email = "jrs341@me.com";
var password = "qtpucjm6";
// set request url, method, body, and headers
// var options = initializeRequest(url, "GET", body, email, password);
// options
// send the request...
request("https://demo.docusign.net/restapi/v2/login_information", "GET", body, email, password, function(err, res, body) {
	// if(!parseResponseBody(err, res, body)) {
	   if(!error) {
		console.log("not response body");
		console.log(res);
		console.log(body);
		return;
	}
	baseUrl = JSON.parse(body).loginAccounts[0].baseUrl;
	console.log(baseUrl);
	console.log(error);
	next(null); // call next function
	
});