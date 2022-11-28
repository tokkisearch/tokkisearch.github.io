function navweb() {
	keyword = sugin.value.toString();
	newlocation = "web?find=" + keyword;
	window.location = newlocation;
}

function navweb2() {
	newlocation = "../web?find=" + keyword;
	window.location = newlocation;
}

function navimg() {
	newlocation = "../img?find=" + keyword;
	window.location = newlocation;
}

function navvid() {
	newlocation = "../vid?find=" + keyword;
	window.location = newlocation;
}

function navnews() {
	newlocation = "../news?find=" + keyword;
	window.location = newlocation;
}