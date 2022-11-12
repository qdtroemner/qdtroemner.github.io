(function() {
	function updateTime() {
		let timeDisplay = document.getElementById("time-display"),
			date = new Date();
		let MM = date.getMonth().toString().padStart(2, '0'),
			dd = date.getDay().toString().padStart(2, '0'),
			yyyy = date.getFullYear().toString().padStart(4, '0'),
			hh = date.getHours().toString().padStart(2, '0'),
			mm = date.getMinutes().toString().padStart(2, '0'),
			ss = date.getSeconds().toString().padStart(2, '0');
		timeDisplay.innerText = `${MM}.${dd}.${yyyy} ${hh}:${mm}:${ss}`;
	}

	function update() {
		updateTime();
	}

	update();
	window.setInterval(() => {
		update();
	}, 1000);
})()