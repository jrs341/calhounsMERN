
// temp array to hold the response data
var temp = [];
// temp array to hold the meter id of chosen meters
var tempMeter = [];

function getMeters() {
  	$.ajax({
    type: "GET",
    url: "/meter",
    dataType: "json"
  	})
  	.done(function(data) {
    	temp.push(data);
    	for(i=0; i<data.length; i++) {
    	// var meter = i;
    	$("#allMeters").append("<label>" + data[i].meter + "</label></br>");
    	$("#allMeters").append("<input id='" + i + "' type='checkbox' name='reading' onclick='getId()'></br>");
    }
    $("#allMeters").append("<input id='submitChosen' type='submit'>");
  });
  return false;
};

// used i in getMeters functions because I was using id's that were the same and causing problems with the post
// function is called when a checkbox is clicked
function getId() {
	console.log(event.target.id);
	var meter = event.target.id;
	$("#"+meter+"").after("<input id='" + temp[0][meter].meter + "' type='text' name='reading' placeholder='Meter " + temp[0][meter].meter + " Reading'></br>");
	tempMeter.push(temp[0][meter].meter);
	console.log(tempMeter);
}

// ===================================================
	// Need a function to removed data from array if box is unchecked
// ===================================================

// $(document).on("click", "#submit", function() {
// 	for (i=0; i<temp[0].lenght; i++) {
// 		var meter = temp[0][i].meter;
// 		if($("#"+meter+"").is(":checked")) {
// 		// if (document.getElementById(""+meter+"").checked) {
// 			$("#"+meter+"").append("<input id='" + meter + "' type='text' name='reading'placeholder='Meter " + meter + " Reading'></br></br>");
// 		}else{
// 			// nothing in meter to empty need a div or something
// 			$("#"+meter+"").empty;
// 		}
// 	};
// 	$("#chosenMeters").append("<input id='submitChosen' type='submit'>");
// });


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

$(document).ready(function() {getMeters()});

$(document).on("click", "#submitChosen", function() {
	console.log('clicked');
	for(i=0; i<tempMeter.length; i++) {
		var meter = tempMeter[i];
		$.ajax({
		type: "POST",
		url: "/submitAllMeterReadings",
		data: {
		 // mongo id for each meter
      	meter: tempMeter[i],
      	// Value taken reading text area
      	reading: $("#"+ meter +"").val().trim()
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



