import axios from 'axios'



export function searchEmail() {
		var thisEmail = 'john@me.com';
		console.log('hit search email');
		var queryURL = "/searchCustomer/" + thisEmail;
		return axios.get(queryURL).then(function(response){
			console.log(response);
		});
	
}

 