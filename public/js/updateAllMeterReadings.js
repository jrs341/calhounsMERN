$(document).ready(function() {getMeters()});

var temp = [];

function getMeters() {
  $.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);
    temp.push(data);
    for(i=0; i<data.length; i++) {
    	var meter = data[i];
    	$("#meterId").append("<label>" + meter + "</label></br>");
    	$("#meterId").append("<input id='" + meter + "' type='text' name='reading' placeholder='Meter " + meter + " Reading'></br></br>");
    }
    $("#meterId").append("<input id='submit' type='submit'>");
  });
  return false;
};

$(document).on("click", "#submit", function() {
	console.log('clicked');
	for(i=0; i<temp[0].length; i++) {
		var meter = temp[0][i].meter;
		$.ajax({
		type: "POST",
		url: "/submitAllMeterReadings",
		data: {
		 // mongo id for each meter
      	meter: temp[0][i].meter,
      	// Value taken reading text area
      	reading: $("#"+ meter +"").val()
      		}
		})
		.done(function(data) {
     	 // Log the response
     	 console.log(data);
    	});
	}
	// Empty the temp array
     temp = [];
});
