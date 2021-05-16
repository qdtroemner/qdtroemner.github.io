const images = [
    "./images/basquiat.png",
    "./images/david.png",
    "./images/drake.png",
    "./images/astro.png",
    "./images/outlook.png",
    "./images/skull.png"
];

window.addEventListener('load', function() {
    var i = 0;
	window.setInterval(function() {
        console.log(i);
        document.body.style.backgroundImage = `url(${images[i]})`;
        i++;
        if (i >= images.length) {i = 0;}
    }, 2000);
})