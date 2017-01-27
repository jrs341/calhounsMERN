var attName = ['given_name', 'family_name', 'phone_number', 'email', 'address_line_1', 'locality', 'administrative_district_1', 'postal_code', 'country'];

var attPlaceHolder = ['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Address Line 1', 'City', 'State', 'Postal Code', 'Country'];

function newCustomerForm() {
  for (var i = 0; i < attName.length; i++) {
    $("newCustomerForm").append("<label>" + attPlaceHolder[i] + "</label></br>");
    $("#newCustomerForm").append("<input id='" + attName[i] + "' type='text' name='" + attName[i] + "' placeholder='" + attPlaceHolder[i] + "'></br></br>");
  }
 $("#newCustomerForm").append("<input id='submitNewCustomerForm' type='submit'></br></br>"); 
};

function searchCustomerForm() {
  $("searchCustomerForm").append("<label> Search By Email Address </label></br>");
  $("#searchCustomerForm").append("<input id='searchByEmail' type='text' name='email' placeholder='Enter Email Address'></br>");
  $("#searchCustomerForm").append("<input id='submitCustomerSearch' type='submit'>"); 
};

function submitNewCustomer() {
  $.ajax({
    type: "POST",
    url: "/submitCustomer",
    data: {
          given_name: $("#given_name").val().trim(),
          family_name: $("#family_name").val().trim(),
          phone_number: $("#phone_number").val().trim(),
          email: $("#email").val().trim(),
          address_line_1: $("#address_line_1").val().trim(),
          locality: $("#locality").val().trim(),
          administrative_district_1: $("#administrative_district_1").val().trim(),
          postal_code: $("#postal_code").val().trim(),
          country: $("#country").val().trim()
          }
    })
    .done(function(data) {
      // console.log(data);
     });
    $("#newCustomerForm").empty();
    $("#searchCustomerForm").empty();
    $("#newCustomerForm").append("<h1> Customer Has Been Added");
    $("#newCustomerForm").append("<a href='/'> <button type='button' >Return to homepage</button></a>");
};

function submitCustomerSearch() {
  var thisEmail = $("#searchByEmail").val().trim();
  $.ajax({
    type: "GET",
    url: "/searchCustomer/" + thisEmail
    })
    .done(function(data) {
      if (data == "") {
        // console.log('its null');
        $("#newCustomerForm").empty();
        $("#searchResult").empty();
        $("#searchResult").append("<h1> Sorry we did not find a record matching that email Please fill out the form or try searching again");
        $("#searchReult").append("<label> Click here to enter your information</label>");
        $("#searchResult").append("<input type='submit' id='toNewCustomerForm'></br>");
      } else {
        $("#newCustomerForm").empty();
        $("#searchCustomerForm").empty();
        $("#newCustomerForm").append("<h1> Please Verify the Information is Still Correct");
        $("#newCustomerForm").append("<a href='/'> <button id='returnHome' type='button' >Return to homepage</button></a>");
      }
     });   
};

$(document).ready(function() {
  newCustomerForm();
  searchCustomerForm();
});

$(document).on("click", "#submitNewCustomerForm", function() {
  submitNewCustomer();
});

$(document).on("click", "#submitCustomerSearch", function() {submitCustomerSearch();
});

$(document).on("click", "#toNewCustomerForm", function() {
  $("#searchResult").empty();
  $("#searchCustomerForm").empty();
  newCustomerForm();
});
