import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

var applicationId;
var paymentForm; 

export default class Payment extends React.Component {

	constructor(){
		super()

		this.requestCardNonce = this.requestCardNonce.bind(this);
	}

componentDidMount() {
	// Call this after initializing the payment form _and_ after the DOM is fully loaded
	this.paymentForm.build();
}

applicationId = 'sandbox-sq0idp-3SQFTUJPRVmha4cthEzvIw'; //  Add your application's ID here

  // Initializes the payment form. See the documentation for descriptions of
  // each of these parameters.
paymentForm = new SqPaymentForm({
    applicationId: 'sandbox-sq0idp-3SQFTUJPRVmha4cthEzvIw',
    inputClass: 'sq-input',
    inputStyles: [
      {
        fontSize: '15px'
      }
    ],
    cardNumber: {
      elementId: 'sq-card-number',
      placeholder: '•••• •••• •••• ••••'
    },
    cvv: {
      elementId: 'sq-cvv',
      placeholder: 'CVV'
    },
    expirationDate: {
      elementId: 'sq-expiration-date',
      placeholder: 'MM/YY'
    },
    postalCode: {
      elementId: 'sq-postal-code'
    },
    callbacks: {

      // Called when the SqPaymentForm completes a request to generate a card
      // nonce, even if the request failed because of an error.
      cardNonceResponseReceived: function(errors, nonce, cardData) {
        if (errors) {
          console.log("Encountered errors:");

          // This logs all errors encountered during nonce generation to the
          // Javascript console.
          errors.forEach(function(error) {
            console.log('  ' + error.message);
          });

        // No errors occurred. Extract the card nonce.
        } else {

          // Delete this line and uncomment the lines below when you're ready
          // to start submitting nonces to your server.
          alert('Nonce received: ' + nonce);


          /*
            These lines assign the generated card nonce to a hidden input
            field, then submit that field to your server.
            Uncomment them when you're ready to test out submitting nonces.

            You'll also need to set the action attribute of the form element
            at the bottom of this sample, to correspond to the URL you want to
            submit the nonce to.
          */
          // document.getElementById('card-nonce').value = nonce;
          // document.getElementById('nonce-form').submit();

        }
      },

      unsupportedBrowserDetected: function() {
        // Fill in this callback to alert buyers when their browser is not supported.
      },

      // Fill in these cases to respond to various events that can occur while a
      // buyer is using the payment form.
      inputEventReceived: function(inputEvent) {
        switch (inputEvent.eventType) {
          case 'focusClassAdded':
            // Handle as desired
            break;
          case 'focusClassRemoved':
            // Handle as desired
            break;
          case 'errorClassAdded':
            // Handle as desired
            break;
          case 'errorClassRemoved':
            // Handle as desired
            break;
          case 'cardBrandChanged':
            // Handle as desired
            break;
          case 'postalCodeChanged':
            // Handle as desired
            break;
        }
      },

      paymentFormLoaded: function() {
        // Fill in this callback to perform actions after the payment form is
        // done loading (such as setting the postal code field programmatically).
        // paymentForm.setPostalCode('94103');
      }
    }
  });


  // This function is called when a buyer clicks the Submit button on the webpage
  // to charge their card.
  requestCardNonce(event) {

    // This prevents the Submit button from submitting its associated form.
    // Instead, clicking the Submit button should tell the SqPaymentForm to generate
    // a card nonce, which the next line does.
    this.event.preventDefault();

    this.paymentForm.requestCardNonce();
  }
  

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <label>Card Number</label>
			  <div id="sq-card-number"></div>
			  <label>CVV</label>
			  <div id="sq-cvv"></div>
			  <label>Expiration Date</label>
			  <div id="sq-expiration-date"></div>
			  <label>Postal Code</label>
			  <div id="sq-postal-code"></div>
			  {/*<!--
			    After the SqPaymentForm generates a card nonce, *this* form POSTs the generated
			    card nonce to your application's server.

			    You should replace the action attribute of the form with the path of
			    the URL you want to POST the nonce to (for example, "/process-card")
			  -->*/}
			  <form id="nonce-form" noValidate action="REPLACE_ME" method="post">

			    {/*<!--
			      Whenever a nonce is generated, it's assigned as the value of this hidden
			      input field.
			    -->*/}
			    <input type="hidden" id="card-nonce" name="nonce"></input>

			    {/*<!--
			      Clicking this Submit button kicks off the process to generate a card nonce
			      from the buyer's card information.
			    -->*/}
			    <input type="submit" onClick={this.requestCardNonce}></input>
			  </form>
          </Card>
        </Col>
      </Row>
    );
  }
}
