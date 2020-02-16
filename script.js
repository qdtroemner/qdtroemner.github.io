window.onload = () => {
	var next = document.getElementById("to-about"),
		 prev = document.getElementById("to-home");

	var home = document.getElementById("home"),
		 about = document.getElementById("about");
	
	next.addEventListener("click", () => {
		home.style.display = "none";
		about.style.display = "flex";
	}, true);
	
	prev.addEventListener("click", () => {
		about.style.display = "none";
		home.style.display = "flex";
	});
}