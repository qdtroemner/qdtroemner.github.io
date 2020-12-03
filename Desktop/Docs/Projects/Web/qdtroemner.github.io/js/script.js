window.addEventListener('load', function() {
	var time = document.getElementById('time');
	time.innerHTML = new Date();
	
	setInterval(function() {
		time.innerHTML = new Date();
	}, 1000);
})