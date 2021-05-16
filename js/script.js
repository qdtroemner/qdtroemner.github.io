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
    //document.getElementById("time").innerHTML = getTime();
    document.body.style.backgroundImage = `url(${images[i]})`;

	window.setInterval(function() {
        i++;
        if (i >= images.length) {i = 0;}
        document.body.style.backgroundImage = `url(${images[i]})`;
    }, 2000);

    /*window.setInterval(function() {
        t = new Date(), h = t.getHours(), m = t.getMinutes();
        if (h > 12) {
            h = h - 12;
        }
        if (h == 0) {
            h = 12;
        }
        document.getElementById("time").innerHTML = getTime();
    }, 60000);*/
})

function getTime() {
    t = new Date(), h = t.getHours(), m = t.getMinutes(), p = "AM";
    if (h > 12) {
        h = h - 12;
        p = " PM";
    }
    if (h == 0) {
        h = 12;
    }
    if (m < 10) {
        m = "0" + m;
    }
    return `${h}:${m} ${p}`;
}