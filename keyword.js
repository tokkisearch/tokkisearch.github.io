function findkeyword() {
	cururl = window.location.toString();
	keyword = cururl.replace("https://tokkisearch.github.io/web/?find=", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/web", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/img/?find=", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/img", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/vid/?find=", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/vid", "");
	keyword = keyword.replace("https://tokkisearch.github.io/news/?find=", ""); 
	keyword = keyword.replace("https://tokkisearch.github.io/news", "");
	keyword = keyword.toLowerCase();
	keyword = keyword.replace(" ", "+")
	sugin.value = cururl.replace("https://tokkisearch.github.io/web/?find=", "");
	sugin.value = sugin.value.replace("https://web.westfield.ma.edu/tokki/web", "");
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/img/?find=", ""); 
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/img", ""); 
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/vid/?find=", ""); 
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/vid", "");
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/news/?find=", ""); 
	sugin.value = sugin.value.replace("https://tokkisearch.github.io/news", "");
}