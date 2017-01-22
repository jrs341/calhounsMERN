function updateAll() {
	if (document.getElementById('all').checked) { 
		window.location = '/views/meterReadings.html';
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
