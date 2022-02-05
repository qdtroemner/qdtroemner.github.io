const albums = [
    "7D2NdGvBHIavgLhmcwhluK", // Yeezus
    "3tgJmEz0R0ZsRSrpwafp4R", // Curtis
    "0zicd2mBV8HTzSubByj4vP", // LUV is Rage
    "755yBlrk0Sz8tIgMMTgyr1", // We Will Always Love You
    "07bIdDDe3I3hhWpxU6tuBp", // Daytona
    "0bCAjiUamIFqKJsekOYuRw", // Wish You Were Here
    "4Carzsnpd6yvuHZ49I0oz8", // "Awaken, My Love!"
    "31KbO7WnDp2AjPdmRTJzdf", // Bandana
	"5fMlysqhFE0itGn4KezMBW", // Donuts
	"7GoZNNb7Yl74fpk8Z6I2cv", // 4:44
	"66EwBbt2kPgugo8Wz0SKAw", // NASIR
	"46kA6zL7Cga656urk1nJNo", // Light of Worlds
	"6pwuKxMUkNg673KETsXPUV", // KIDS SEE GHOSTS
	"2nkto6YNI4rUYTLqEwWJ3o", // Flower Boy
	"31qVWUdRrlb8thMvts0yYL", // The Slow Rush
	"3mH6qwIy9crq0I9YQbOuDf", // Blonde
	"5zi7WsKlIiUXv09tbGLKsE", // IGOR
	"600ClrWRsAr7jZ0qjaBLHz", // 3.15.20
	"3IO8IPjwXuzPJnoaqkwYrj", // NOT ALL HEROES WEAR CAPES
	"4GNIhgEGXzWGAefgN5qjdU", // Because the Internet
	"5wec5BciMpDMzlEFpYeHse", // In the Court of the Crimson King
	"3WFTGIO6E3Xh4paEOBY9OU", // 808s & Heartbreak
	"28nUWsyczStUhYKXTY1IoW", // I Want You
	"2HaqChIDc5go3qxVunBDK0", // Funk Wav Bounces Vol.1
	"41GuZcammIkupMPKH2OJ6I", // ASTROWORLD
	"7ycBtnsMtyVbbwTfJwRjSP", // To Pimp a Butterfly
	"47DbvIExnHbqAhIuzBAO9W", // Steve Lacy's Demo
	"7gsWAHLeT0w7es6FofOXk1", // The Life of Pablo
	"0ZJt4dCoI19u71k37E1nQu", // A Written Testimony
	"7z4GhRfLqfSkqrj5F3Yt2B", // Heaven or Hell
];

var displayedAlbums = [];
for(let i = 0; i < 5; i++) {
	let i = Math.floor(Math.random() * albums.length);
	displayedAlbums.push(albums[i]);
	albums.splice(i, 1);
}

var albumContainer = document.getElementById('albums-spotify');
window.onload = function() {
    for(url of displayedAlbums) {
        let iframe = document.createElement('iframe');
        iframe.src = `https://open.spotify.com/embed/album/${url}?theme=1`;
        iframe.width = "80%";
        iframe.height = "100%";
		iframe.style.borderWidth = 0;
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.allowFullscreen = "";
        albumContainer.appendChild(iframe);
    }
}