function meterUpdate() {
	if (document.getElementById('meter_update').checked) { 
		window.location = '/views/metersToUpdate.html';
		return false; 
	} else {
		return true;
	}
};

function checkIn() {
	if (document.getElementById('checkin').checked) { 
		window.location = '/views/checkin.html';
		return false; 
	} else {
		return true;
	}
};

function checkOut() {
	if (document.getElementById('checkout').checked) { 
		window.location = '/views/checkout.html';
		return false; 
	} else {
		return true;
	}
};
