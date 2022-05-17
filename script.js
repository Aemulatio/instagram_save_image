console.log("script outer message")
let url, fileName;

function saveImage(event) {
		let div = event.target;
		console.log(div);
		console.log(div.attributes)
		if ("role" in div.attributes) {
			return;
		} else {
			console.log(event)
			url = div.previousElementSibling.firstElementChild.getAttribute('src');
			fileName = url.match(/(\/\w*.((jpg)|(png)))/)[0].replace("/", "");
		}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	sendResponse({url: url, fileName: fileName});
});
document.addEventListener("contextmenu", function (event) {
	saveImage(event)
});