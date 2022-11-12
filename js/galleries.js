const galleries = [
	["santa_barbara", ["DSC_0113.JPG", "DSC_0130.JPG", "DSC_0179.JPG", "DSC_0126.JPG", "DSC_0134.JPG", "DSC_0200.JPG"]],
	["sb_to_monterey", ["DSC_0029.JPG", "DSC_0058.JPG", "DSC_0127.JPG", "DSC_0133.JPG", "DSC_0153.JPG", "DSC_0040.JPG", "DSC_0117.JPG", "DSC_0128.JPG", "DSC_0146.JPG"]],
	["tennessee", ["DSC_0011.JPG", "DSC_0015.JPG", "DSC_0019.JPG", "DSC_0030.JPG"]],
	["u_chicago", ["DSC_0051.JPG", "DSC_0061.JPG", "DSC_0067.JPG", "DSC_0055.JPG", "DSC_0064.JPG", "DSC_0068.JPG"]],
	["universal_studios", ["DSC_0063.JPG", "DSC_0072.JPG", "DSC_0079.JPG", "DSC_0088.JPG", "DSC_0115.JPG", "DSC_0065.JPG", "DSC_0073.JPG", "DSC_0086.JPG", "DSC_0089.JPG", "DSC_0143.JPG"]]
]

function load_images() {
	var gallery_wrapper = document.getElementById("gallery-container");
	for (gallery of galleries) {
		let gallery_label = gallery[0];
		for (image_url of gallery[1]) {
			let img = new Image();
			img.src = `./images/portfolio/${gallery_label}/${image_url}`;
			img.onload = function() {
				gallery_wrapper.append(img);	
			}
		}
	}
}

window.onload = function() {
	load_images();
}