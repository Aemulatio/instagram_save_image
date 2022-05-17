let url, fileName;

function saveImage(event) {
	let div = event.target;
	if ("role" in div.attributes) {
		return;
	} else {
		if (div.tagName.toLowerCase() === "div") {
			url = div.previousElementSibling.firstElementChild.getAttribute('src');
			fileName = url.match(/(\/\w*.((jpg)|(png)))/)[0].replace("/", "");
		}
	}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	sendResponse({url: url, fileName: fileName});
	url = undefined;
	fileName = undefined;
});
document.addEventListener("contextmenu", function (event) {
	saveImage(event)
});