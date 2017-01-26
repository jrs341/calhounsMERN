
// temp array to hold the response data
var temp = [];
// temp array to hold the meter id of chosen meters
var tempMeter = [];


function setChangeListen(meterName) {
	$("#checkbox" + meterName + "").change(function () {
		if ($(this).is(':checked')) {
				$(this).after("<input id='" + meterName + "' type='text' name='reading' placeholder='Meter " + meterName + " Reading'></br>");
				tempMeter.push(meterName);
		} else {
			$("#" + meterName + "").remove();
		}	
	});
};

function getMeters() {
  	$.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  	})
  	.done(function(data) {
    	temp.push(data);
    	for(i=0; i<data.length; i++) {
    		var meterName = data[i].meter;
    		$("#allMeters").append("<label>" + meterName + "</label></br>");
    		$("#allMeters").append("<input id='checkbox" + meterName + "' type='checkbox' name='reading' ></br>");
    		setChangeListen(meterName);
    	}
    	$("#allMeters").append("<input id='submitChosen' type='submit'>");
  	});
  return false;
};

// ===================================================
	// Need a function to removed data from array if box is unchecked
// ===================================================

$(document).ready(function() {getMeters()});

$(document).on("click", "#submitChosen", function() {
	for(i=0; i<tempMeter.length; i++) {
		// var meter = tempMeter[i];
		$.ajax({
		type: "POST",
		url: "/submitAllMeterReadings",
		data: {
		 // mongo id for each meter
      	meter: tempMeter[i],
      	// Value taken reading text area
      	reading: $("#"+ tempMeter[i] +"").val().trim()
      		}
		})
		.done(function(data) {
     	 // Log the response
     	 console.log(data);
    	});
	}
	// Empty the temp array
     temp = [];
     tempMeter = [];
});
