const albums = [
    "album/07bIdDDe3I3hhWpxU6tuBp",
    "album/4PWBTB6NYSKQwfo79I3prg",
    "album/3r46DPIQeBQbjvjjV5mXGg",
    /*"album/340MjPcVdiQRnMigrPybZA",
    "album/622NFw5Yk0OReMJ2XWcXUh",
    "album/2suR5CCbtL2Wq8ShFo8rFr",
    "album/45ba6QAtNrdv6Ke4MFOKk9",
    "album/4cj3HwgA7wk89PJW8sMpDZ",
    "album/3kEtdS2pH6hKcMU9Wioob1",
    "album/7GoZNNb7Yl74fpk8Z6I2cv",
    "album/4JAvwK4APPArjIsOdGoJXX",
    "album/7Cw4LObzgnVqSlkuIyywtI",
    "album/2P2Xwvh2xWXIZ1OWY9S9o5",
    "album/2v6ANhWhZBUKkg6pJJBs3B",
    "album/0ZJt4dCoI19u71k37E1nQu",
    "album/6YUCc2RiXcEKS9ibuZxjt0",
    "album/6XJZInF8Eg8hLBGNKTeHEI",
    "album/66EwBbt2kPgugo8Wz0SKAw",
    "album/6PhUHgMnUCSCgrjfc2lDF0",
    "album/4m2880jivSbbyEGAKfITCa",
    "album/2noRn2Aes5aoNVsU6iWThc",
    "album/621OhgnZJ7Pz8iUazct1In",
    "album/42oQv8fbI5CbeuAasf2ILC",
    "album/0bCAjiUamIFqKJsekOYuRw",
    "album/4eLPsYPBmXABThSJ821sqY",
    "album/3tgJmEz0R0ZsRSrpwafp4R",
    "album/7xJ7jHNu3JNfdnao9xwMho",
    "album/47ASXS1yLPfpc8yeeNQCIx",
    "album/20r762YmB5HeofjMCiPMLv",
    "album/7D2NdGvBHIavgLhmcwhluK",
    "album/7gsWAHLeT0w7es6FofOXk1",
    "album/1hZUz53ExRTOBqQKuJCbXX",
    "album/1Sf8GsXG32t0jNrX11xqWx",
    "album/47DbvIExnHbqAhIuzBAO9W",
    "album/3e7vtKJ3m1zVh38VGq2g3H",
    "album/6XzoFb3hP14jVQeCMRdVJR",
    "album/6R0ynY7RF20ofs9GJR5TXR",
    "album/2inNwSLauhkASzQ9RFrH5E",
    "album/3gPlX9Zs3tXZZKNCyoOkSm",
    "album/2QRedhP5RmKJiJ1i8VgDGR",
    "album/3WFTGIO6E3Xh4paEOBY9OU",
    "album/3GBnNRYsxBfEeMSMmTpJ25",
    "album/755yBlrk0Sz8tIgMMTgyr1",*/
];

var albumContainer = document.getElementById('albums');
window.onload = function() {
    for(url of albums) {
        let iframe = document.createElement('iframe');
        iframe.src = `https://open.spotify.com/embed/${url}?theme=1`;
        iframe.width = "80%";
        iframe.height = "100%";
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.allowFullscreen = "";
        albumContainer.appendChild(iframe);
    }
}