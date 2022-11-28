function loadnewsdb() {
	url='https://www.cnn.com/2000/ALLPOLITICS/stories/05/10/thurmond.hospitalized/index.html';
	preview='../webcache/cnn_storm.png';
	title='Strom Thurmond to remain hospitalized for dehydration';
	source='CNN';
	sourceurl='https://www.cnn.com/';
	tag='dummy';
	newstmp=[url, preview, title, source, sourceurl, tag]; 
	news.push(newstmp);
	url='https://www.nbcnews.com/news/world/asdfg-flna8c11520438';
	preview='../webcache/nbc_asdfg.png';
	title='asdfg';
	source='NBC';
	sourceurl='https://www.nbcnews.com/';
	tag='dummy';
	newstmp=[url, preview, title, source, sourceurl, tag]; 
	news.push(newstmp); 
	url='https://www.cbsnews.com/news/sgn-asdfg/';
	preview='../webcache/cbs_asdfg.png';
	title='asdfg';
	source='CBS News';
	sourceurl='https://www.CBS News.com/';
	tag='dummy';
	newstmp=[url, preview, title, source, sourceurl, tag]; 
	news.push(newstmp); 
}

function clearnewsdb() {
	news.length = 0;
}

function debugnewscust(keyword) {
	resultboxin.innerHTML = '';
	console.log("Loading newsdb");
	try {
		loadnewsdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispnews(keyword);
			console.log("Done!");
			console.log("Clearing NewsDB");
			clearnewsdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}