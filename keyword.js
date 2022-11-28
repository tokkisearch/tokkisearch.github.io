function findkeyword() {
	cururl = window.location.toString();
	keyword = cururl.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/web/?find=', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/web', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/img/?find=', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/img', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/vid/?find=', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/vid', "");
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/news/?find=', ""); 
	keyword = keyword.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/news', "");
	keyword = keyword.toLowerCase();
	keyword = keyword.replace(" ", "+")
	sugin.value = cururl.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/web/?find=', "");
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/tokki/web', "");
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/img/?find=', ""); 
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/img', ""); 
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/vid/?find=', ""); 
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/vid', "");
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/news/?find=', ""); 
	sugin.value = sugin.value.replace('https://web.westfield.ma.edu/~darmstrong4810/tokki/news', "");
}