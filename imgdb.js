function loadimgdb() {
	url='https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog';
	preview='https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg';
	title='Dog, facts, and photos';
	source='National Geographics';
	sourceurl='https://www.nationalgeographic.com/';
	tag='dogs';
	imgtmp=[url, preview, title, source, sourceurl, tag]; 
	img.push(imgtmp); 
}

function clearimgdb() {
	img.length = 0;
}

function debugimgcust(keyword) {
	resultboxin.innerHTML = '';
	console.log("Loading imgdb");
	try {
		loadimgdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispimg(keyword);
			console.log("Done!");
			console.log("Clearing ImgDB");
			clearimgdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}