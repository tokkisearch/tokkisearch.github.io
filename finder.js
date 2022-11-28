function dispweb(keyword) {
	document.title = "Tokki Web: " + keyword;
	results = 0;
	keywordcon = keyword.toLowerCase();
	if (keyword.length == 0) {
		
	}
	if (keyword.length > 0) {
		for (i = 0; i < web.length; i++) {
			if (keywordcon.includes(web[i][5])) {
				results += 1;
				newtitle = web[i][2].toString();
				newtitle = newtitle.replace(/(.{17})..+/, "$1&hellip;");
				resultboxin.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + web[i][0] + '"><img src="' + web[i][1] + '" width="256" height="128"><br>' + newtitle + '</a><br><a href="' + web[i][4] + '">' + web[i][3] + '</a>';
			}
		}
	}
	if (results == 0) {
		resultboxin.innerHTML += '<h1>No results found</h1>';
	}
	
}

function dispimg(keyword) {
	document.title = "Tokki Images: " + keyword;
	results = 0;
	keywordcon = keyword.toLowerCase();
	if (keyword.length == 0) {
		
	}
	if (keyword.length > 0) {
		for (i = 0; i < img.length; i++) {
			if (img[i][5].includes(keywordcon)) {
				results += 1;
				newtitle = img[i][2].toString();
				newtitle = newtitle.replace(/(.{17})..+/, "$1&hellip;");
				resultboxin.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + img[i][1] + '"><img src="' + img[i][1] + '" width="256" height="128"></a><br><a href="' + img[i][0] + '">' + newtitle + '</a><br><a href="' + img[i][4] + '">' + img[i][3] + '</a>';
			}
		}
	}
	if (results == 0) {
		resultboxin.innerHTML += '<h1>No results found</h1>';
	}
}

function dispvid(keyword) {
	document.title = "Tokki Videos: " + keyword;
	results = 0;
	keywordcon = keyword.toLowerCase();
	if (keyword.length == 0) {
		
	}
	if (keyword.length > 0) {
		for (i = 0; i < vid.length; i++) {
			if (vid[i][5].includes(keywordcon)) {
				results += 1;
				newtitle = vid[i][2].toString();
				newtitle = newtitle.replace(/(.{17})..+/, "$1&hellip;");
				resultboxin.innerHTML += '<div class="grid-result"><div class="grid-item"><iframe src="' + vid[i][1] + '" width="256" height="128"></iframe><br><a href="' + vid[i][0] + '">' + newtitle + '</a><br><a href="' + vid[i][4] + '">' + vid[i][3] + '</a>';
			}
		}
		if (results == 0) {
			resultboxin.innerHTML += '<h1>No results found</h1>';
		}
	}
}

function dispnews(keyword) {
	document.title = "Tokki News: " + keyword;
	results = 0;
	keywordcon = keyword.toLowerCase();
	if (keyword.length == 0) {
		
	}
	if (keyword.length > 0) {
		for (i = 0; i < news.length; i++) {
			if (news[i][5].includes(keywordcon)) {
				results += 1;
				newtitle = news[i][2].toString();
				newtitle = newtitle.replace(/(.{17})..+/, "$1&hellip;");
				resultboxin.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + news[i][0] + '"><img src="' + news[i][1] + '" width="256" height="128"><br>' + newtitle + '</a><br><a href="' + news[i][4] + '">' + news[i][3] + '</a>';
			}
		}
	}
	if (results == 0) {
		resultboxin.innerHTML += '<h1>No results found</h1>';
	}
}
