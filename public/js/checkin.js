function checkin() {
	if (document.getElementById('checkin').checked) { 
		window.location = '/views/checkin.html';
		return false; 
	} else {
		return true;
	}
}