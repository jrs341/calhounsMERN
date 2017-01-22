function chooseMeters() {
	if (document.getElementById('choose_meters').checked) { 
		window.location = '/views/updateChooseMeterReadings.html';
		return false; 
	} else {
		return true;
	}
};

function allMeters() {
	if (document.getElementById('all_meters').checked) { 
		window.location = '/views/updateAllMeterReadings.html';
		return false; 
	} else {
		return true;
	}
};