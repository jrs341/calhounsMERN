
var temp = [];

function getMeters() {
  $.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  })
  .done(function(data) {
    temp.push(data);
    for(i=0; i<data.length; i++) {
    	var meter = data[i].meter;
    	$("#meterId").append("<label>" + meter + "</label></br>");
    	$("#meterId").append("<input id='" + meter + "' type='text' name='reading' placeholder='Meter " + meter + " Reading'></br></br>");
    }
    $("#meterId").append("<input id='submit' type='submit'>");
  });
  return false;
};

function submitAllMeterReadings() {
  for(i=0; i<temp[0].length; i++) {
    var meter = temp[0][i].meter;
    $.ajax({
    type: "POST",
    url: "/submitAllMeterReadings",
    data: {
        // mongo id for each meter
        meter: temp[0][i].meter,
        // Value taken reading text area
        reading: $("#"+ meter +"").val().trim()
          }
    })
    .done(function(data) {
      // console.log(data);
     });
  };
    temp = [];
    $("#meterId").empty();
    $("#meterId").append("<h1> All meters were updated");
    $("#meterId").append("<a href='/'><button type='button'>Return to homepage</button></a>");
    displayDifference();
};

// this function gets the last two meter readings from the database
function displayDifference() {
  $.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  })
  .done(function(data) {
    for(i=0; i<data.length; i++) {
      var current = (data[i].reading.length)-1;
      var previous = (data[i].reading.length)-2;      
      var meter = data[i].meter;
      var previousReading = data[i].reading[previous];
      var currentReading = data[i].reading[current];
      var usage = currentReading - previousReading;
      $("#meterId").append("<label>" + meter + " previous reading: " + previousReading + " current reading: " + currentReading + " Total KWH used: " + usage + "</label></br>");
    }
  });
  return false;
};

$(document).ready(function() {getMeters()});

$(document).on("click", "#submit", function() {submitAllMeterReadings()});
  
