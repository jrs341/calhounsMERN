function checkout() {
	if (document.getElementById('checkout').checked) { 
		window.location = '/views/checkout.html';
		return false; 
	} else {
		return true;
	}
}