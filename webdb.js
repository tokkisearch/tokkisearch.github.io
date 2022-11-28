function loadwebdb() {
	url='https://www.questionsanswered.net/article/remedies-dog-diarrhea?utm_content=params%3Ao%3D740012%26ad%3DdirN%26qo%3DserpIndex&ueid=f943eba5-8e6b-427a-82fa-b10791d4288d';
	preview='../webcache/Questionsanswered_Remedies_for_Dog_Diarrhea.png';
	title='Remedies for Dog Diarrhea';
	source='Questionsanswered';
	sourceurl='https://www.questionsanswered.net';
	tag='dog'
	webtmp=[url, preview, title, source, sourceurl, tag]; 
	web.push(webtmp); 
	url='https://www.reference.com/pets-animals/dog-cats-weird?utm_content=params%3Ao%3D740005%26ad%3DdirN%26qo%3DserpIndex&ueid=f943eba5-8e6b-427a-82fa-b10791d4288d';
	preview='../webcache/Reference_Why_Dogs_and_Cats_Do_the_Weird_Things_They_Do.png';
	title='Why Dogs and Cats Do the Weird Things They Do';
	source='Reference';
	sourceurl='https://www.reference.com';
	tag='dog'
	webtmp=[url, preview, title, source, sourceurl, tag]; 
	web.push(webtmp); 
	url='https://www.womenshealthmag.com/fitness/a20698941/up-dog-down-dog/';
	preview='../webcache/Womenshealthmagfitnessa20698941_Up_DogDown_Dog.png';
	title='Up Dog/Down Dog';
	source='Womens health';
	sourceurl='https://www.womenshealthmag.com/fitness/a20698941';
	tag='dog'
	webtmp=[url, preview, title, source, sourceurl, tag]; 
	web.push(webtmp); 
}

function clearwebdb() {
	web.length = 0;
}

function debugwebcust(keyword) {
	resultboxin.innerHTML = '';
	console.log("Loading webdb");
	try {
		loadwebdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispweb(keyword);
			console.log("Done!");
			console.log("Clearing WebDB");
			clearwebdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}