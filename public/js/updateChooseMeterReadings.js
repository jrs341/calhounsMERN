
// replace with function getMeters()
// $(document).on("click", "#submit", function() {
// temp array to hold the response data
var temp = [];
// temp array to hold the meter id of chosen meters
var tempMeter = [];

$(document).ready(function() {
  	$.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  	})
  	.done(function(data) {
    	console.log(data);
    	temp.push(data);
    	for(i=0; i<data.length; i++) {
    	var meter = data[i].meter;
    	$("#allMeters").append("<label>" + meter + "</label></br>");
    	$("#allMeters").append("<input id='" + meter + "' type='checkbox' name='reading' onclick='getId()'</br>");
    }
    $("#allMeters").append("<input id='submit' type='submit'>");
  });
  return false;
});

function getId() {
	console.log('hit getId');
	console.log(event.target.id);
	var meter = event.target.id;
	$("#"+meter+"").after("<input id='" + meter + "' type='text' name='reading' placeholder='Meter " + meter + " Reading'></br>");
	// console.log(tempMeter);
}

$(document).on("click", "#submit", function() {
	for (i=0; i<temp[0].lenght; i++) {
		var meter = temp[0][i].meter;
		if($("#"+meter+"").is(":checked")) {
		// if (document.getElementById(""+meter+"").checked) {
			$("#"+meter+"").append("<input id='" + meter + "' type='text' name='reading'placeholder='Meter " + meter + " Reading'></br></br>");
		}else{
			$("#"+meter+"").empty;
		}
	};
	$("#chosenMeters").append("<input id='submitChosen' type='submit'>");
});
// replace with function getMeters()

// if input id is true get those meter or meters
// $(document).on("click", "#submit", function() {
// 	$("#allMeters").empty();
// 	console.log(temp[0]);
// 	for (i=0; i<temp[0].length; i++) {
// 		if (document.getElementById(temp[0][i].meter.checked) == 1) {
// 			$.ajax({
//     		type: "GET",
//     		url: "/meter",
//     		dataType: "json"
//     		// list chosen meters here
//   			})
//   			.done(function(data) {
//     			console.log(data);
//     			for(i=0; i<data.length; i++) {
//     			var meter = data[i].meter;
//     			$("#chosenMeters").append("<label>" + data[i].meter + "</label></br>");
//     			$("#chosenMeters").append("<input id='" + meter + "' type='text' name='reading'placeholder='Meter " + data[i].meter + " Reading'></br></br>");
//     			}
// 			});
// 		}  
//   	}
//   $("#chosenMeters").append("<input id='submitChosen' type='submit'>");
//   return false;
// });

$(document).on("click", "#submitChosen", function() {
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