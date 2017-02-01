import axios from 'axios'

var thisEmail =[];

export function searchEmail() {
	emailValue();
    console.log('hit search email');
    var queryURL = "/searchCustomer/" + thisEmail;
    return $.ajax({
    type: 'GET',
    url: '/searchCustomer/' + thisEmail
    })
    .done((data) => {
      console.log(data);
      thisEmail = [];
    });
		
}

export function emailValue() {
	var email = document.getElementById('emailSearch').value;
	thisEmail.push(email);
	console.log(thisEmail);
}

// var thisEmail = 'john@me.com';
// 		console.log('hit search email');
// 		var queryURL = "/searchCustomer/" + thisEmail;
// 		return axios.get(queryURL).then(function(response){
// 			console.log(response);
// 		});	
 