function loadsugdb() {
	sugtmp = "dog";
	sug.push(sugtmp);
	sugtmp = "Dog";
	sug.push(sugtmp);
	sugtmp = "dogs";
	sug.push(sugtmp);
	sugtmp = "Dogs";
	sug.push(sugtmp);
}

function loadtrendsdb() {
	sugtmp = "dog";
	trends.push(sugtmp);
}

function showtrends() {
	for (i = 0; i < trends.length; i++) {
		sugboxin.innerHTML = '';
		sugbox.style.display = "block";
		sugboxh = 1
		sugboxh += 48;
		sugbox.style.height = sugboxh + "px";
		sugboxin.innerHTML += '<a href="web/?find=' + trends[i] + '"><p class="sugtxt">' + trends[i] + '</p></a>';
	}
}

function showtrends2() {
	for (i = 0; i < trends.length; i++) {
		sugboxin.innerHTML = '';
		sugbox.style.display = "block";
		sugboxh = 1
		sugboxh += 48;
		sugbox.style.height = sugboxh + "px";
		sugboxin.innerHTML += '<a href="../web/?find=' + trends[i] + '"><p class="sugtxt">' + trends[i] + '</p></a>';
	}
}

function showsug() {
	sugboxin.innerHTML = '';
	sugbox.style.display = "block";
	sugboxh = 1
	searchfield = sugin.value;
	for (i = 0; i < sug.length; i++) {
		if (sug[i].includes(searchfield)) {
			sugboxh += 48;
			sugbox.style.height = sugboxh + "px";
			sugboxin.innerHTML += '<a href="web?find=' + sug[i] + '"><p class="sugtxt">' + sug[i] + '</p></a>';
		}
	}
	
	if (searchfield == '') {
		sugboxin.innerHTML = '';
		sugboxh = 24;
		sugbox.style.height = sugboxh + "px";
	}
}

function showsug2() {
	sugboxin.innerHTML = '';
	sugbox.style.display = "block";
	sugboxh = 1
	searchfield = sugin.value;
	for (i = 0; i < sug.length; i++) {
		if (sug[i].includes(searchfield)) {
			sugboxh += 48;
			sugbox.style.height = sugboxh + "px";
			sugboxin.innerHTML += '<a href="../web?find=' + sug[i] + '"><p class="sugtxt">' + sug[i] + '</p></a>';
		}
	}
	
	if (searchfield == '') {
		sugboxin.innerHTML = '';
		sugboxh = 24;
		sugbox.style.height = sugboxh + "px";
	}
}

function killsug() {
	sugboxin.innerHTML = '';
	sugbox.style.display = "none";
}