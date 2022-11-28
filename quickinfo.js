function loadquickinfodb() {
	quickinfotmp = "dog";
	quickinfo.push(quickinfotmp);
	quickinfotmp = "dogs";
	quickinfo.push(quickinfotmp);
}

function doquickinfo(keyword) {
	keywordcon = keyword.toLowerCase();
	for (i = 0; i < quickinfo.length; i++) {
			if (keywordcon.includes(quickinfo[i])) {
				quickinfobox.style.display = "grid";
				quickinfoin.innerHTML = "";
				quickinfoin.innerHTML += '<iframe src="../quickinfo/' + quickinfo[i] + '.html" scrolling="no" frameborder="0" seamless="seamless" class="quickinfocontent"></iframe>';
			}
		}
}