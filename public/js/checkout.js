var attName = ['given_name', 'family_name', 'phone_number', 'email', 'address_line_1', 'locality', 'administrative_district_1', 'postal_code', 'country'];

var attPlaceHolder = ['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Address Line 1', 'City', 'State', 'Postal Code', 'Country'];

var customerId = [];

function newCustomerForm() {
  for (var i = 0; i < attName.length; i++) {
    $("newCustomerForm").append("<label>" + attPlaceHolder[i] + "</label></br>");
    $("#newCustomerForm").append("<input id='" + attName[i] + "' type='text' name='" + attName[i] + "' placeholder='" + attPlaceHolder[i] + "'></br></br>");
  }
 $("#newCustomerForm").append("<input id='submitNewCustomerForm' type='button' value='Submit'></br></br>"); 
};

function autoFill(data) {
  customerId.push(data._id);
  for (var key in data) {
    $("#"+key+"").val(data[key]);
  }
  $("#submitNewCustomerForm").remove();
  $("#newCustomerForm").append("<input id='updateCustomerInfo' type='button' value='Update'></br></br>");
  $("#newCustomerForm").append("<a href='addCustomerToCabinOrSpace.html'><button id='next' type='button'>Next</button></a></br></br>") 
};

function searchCustomerForm() {
  $("searchCustomerForm").append("<label> Search By Email Address </label></br>");
  $("#searchCustomerForm").append("<input id='searchByEmail' type='text' name='email' placeholder='Enter Email Address'></br>");
  $("#searchCustomerForm").append("<input id='submitCustomerSearch' type='submit' value='Search'>"); 
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
     });
    $("#newCustomerForm").empty();
    $("#searchCustomerForm").empty();
    $("#newCustomerForm").append("<h1> Customer Has Been Added");
    $("#newCustomerForm").append("<a href='addCustomerToCabinOrSpace.html'> <button type='button' >Next</button></a>");
};

function updateCustomerInfo() {
  console.log(customerId[0]);
  $.ajax({
    type: "POST",
    url: "/updateCustomer",
    data: {
          _id: customerId[0],
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
     });
    $("#newCustomerForm").empty();
    $("#searchCustomerForm").empty();
    $("#newCustomerForm").append("<h1> Customer Info Has Been Updated");
    $("#newCustomerForm").append("<a href='addCustomerToCabinOrSpace.html'> <button type='button' >Next</button></a>");
};

function submitCustomerSearch() {
  var thisEmail = $("#searchByEmail").val().trim();
  $.ajax({
    type: "GET",
    url: "/searchCustomer/" + thisEmail
    })
    .done(function(data) {
      if (data == "") {
        // $("#newCustomerForm").empty();
        $("#searchResult").empty();
        $("#searchResult").append("<h1> Sorry we did not find a record matching that email try searching again");
        searchCustomerForm();
        // $("#searchReult").append("<label> Click here to enter your information</label>");
        // $("#searchResult").append("<input type='submit' id='toNewCustomerForm'></br>");
      } else {
        // $("#newCustomerForm").empty();
        $("#searchCustomerForm").empty();
        $("#searchResult").append("<h1> Please Verify Your Information is Correct");
        $("#searchResult").append("<h1> You are checking out of ???")
        // newCustomerForm();
        // autoFill(data);
        $("#searchResult").append("<input type='button' id='checkout' value='Checkout'>");
      }
     });   
};

function checkout() {
  $.ajax({
    type: "POST",
    url: "/removeCustomerFromMeter",
    data: {
          customer: localStorage._id
          }
    })
    .done(function(data) {
    });
    // $("#newCustomerForm").empty();
    // $("#searchCustomerForm").empty();
    $("#searchCustomerForm").append("<h1> Customer Has Been Checkedout");
    // $("#newCustomerForm").append("<a href='addCustomerToCabinOrSpace.html'> <button type='button' >Next</button></a>");
};

if(typeof(Storage) !== "undefined") {
  console.log('local storage');
} else {
  console.log('sorry no storage');
};

$(document).ready(function() {
  // newCustomerForm();
  searchCustomerForm();
});

$(document).on("click", "#submitNewCustomerForm", function() {
  var thisEmail = $("#email").val().trim();
  submitNewCustomer();
  $.ajax({
    type: "GET",
    url: "/searchCustomer/" + thisEmail
    })
    .done(function(data) { 
      localStorage._id = ""+data._id+"";
      console.log(localStorage._id);
      });
});

$(document).on("click", "#submitCustomerSearch", function() {
  var thisEmail = $("#searchByEmail").val().trim();
  submitCustomerSearch();
  $.ajax({
    type: "GET",
    url: "/searchCustomer/" + thisEmail
    })
    .done(function(data) { 
      localStorage._id = ""+data._id+"";
      console.log(localStorage._id);
    });
});

$(document).on("click", "#updateCustomerInfo", function() {
  updateCustomerInfo();
});

// $(document).on("click", "#toNewCustomerForm", function() {
//   $("#searchResult").empty();
//   $("#searchCustomerForm").empty();
//   newCustomerForm();
// });

$(document).on("click", "#checkout", function() {
  checkout();
});
