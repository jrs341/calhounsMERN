var attName = ['given_name', 'family_name', 'phone_number', 'email', 'address_line_1', 'locality', 'administrative_district_1', 'postal_code', 'country'];

var attPlaceHolder = ['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Address Line 1', 'City', 'State', 'Postal Code', 'Country'];

var customerId = [];

var thisEmail =[];

export function searchEmail() {
	emailValue();
    console.log('hit search email');
    var queryURL = "/searchCustomer/" + thisEmail[0];
    return $.ajax({
    type: 'GET',
    url: '/searchCustomer/' + thisEmail
    })
    .done((data) => {
      console.log(data);
      if (data == "") {
        $("#searchResult").empty();
        $("#searchResult").append("<h1> Sorry we did not find a record matching that email Please fill out the form or try searching again");
      } else {
      //   $("#newCustomerForm").empty();
      //   $("#searchCustomerForm").empty();
        $("#searchResult").append("<h1> Please Verify Your Information is Correct");
        newCustomerForm();
      //   autoFill(data);
      //   $("#newCustomerForm").append("<a href='addCustomerToCabinOrSpace.html'> <button type='button' >Next</button></a>");
      console.log('found it');
      }

      thisEmail = [];
    });
		
};

function emailValue() {
	var email = document.getElementById('emailSearch').value;
	thisEmail.push(email);
	console.log(thisEmail);
};

function newCustomerForm() {
  for (var i = 0; i < attName.length; i++) {
    $("newCustomerForm").append("<label>" + attPlaceHolder[i] + "</label></br>");
    $("#newCustomerForm").append("<input id='" + attName[i] + "' type='text' name='" + attName[i] + "' placeholder='" + attPlaceHolder[i] + "'></br></br>");
  }
 $("#newCustomerForm").append("<input id='submitNewCustomerForm' type='button' value='Submit'></br></br>"); 
};
 