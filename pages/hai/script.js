var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#f8adff";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const PARTICLE_NUM = 100;
const MAX_VELOCITY = 1;
const MAX_SIZE = 20;
const MIN_SIZE = 10;
const HEARTS = ["💘", "💝", "💖", "💞", "❣️", "❤️"];

function drawHeart(x, y, s, heart) {
	ctx.font = `${s}px sans-serif`;
	ctx.textAlign = "center";
	ctx.fillText(heart, x, y);
}

drawHeart(50, 50, 10);

function draw(particles_list) {
	for(particle of particles_list) {
		drawHeart(particle[0], particle[1], particle[2], particle[3]);
	}
}

function update(particles_list) {
	for(particle of particles_list) {
		particle[1] += MAX_VELOCITY * (particle[2] / (MAX_SIZE + MIN_SIZE));

		if(particle[1] > canvas.height) {
			particle[1] = 0;
			particle[0] = Math.random() * canvas.width;
		}
	}
}

particles = [];
for(i = 0; i < PARTICLE_NUM; i++) {
	particles.push([Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * MAX_SIZE + MIN_SIZE, HEARTS[Math.floor(Math.random() * HEARTS.length)]]);
}

window.setInterval(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw(particles);
	update(particles);
	ctx.font = `bold 35px sans-serif`;
	ctx.fillText("I love you Hai", canvas.width / 2, canvas.height / 2);
	ctx.font = `italic 35px sans-serif`;
	ctx.textAlign = "left";
	ctx.fillText("–from Q", canvas.width / 2, canvas.height / 2 + 35);
}, 120/1000);