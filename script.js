console.log("script outer message")
let url, fileName, isSave = false, event_target;

function saveImage(event) {
	// if (isSave) {
		console.log(event)
		let div = event.target;
		console.log(div);
		console.log(div.attributes)
		if ("role" in div.attributes) {
			return;
		} else {
			console.log(event)
			url = div.previousElementSibling.firstElementChild.getAttribute('src');
			fileName = url.match(/(\/\w*.((jpg)|(png)))/)[0].replace("/", "");
			// saveAs(url, fileName)
		}
	// }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	console.log(request, sender, sendResponse);

	// if (request.menuItemId === 'save') {
	// 	isSave = true
	// } else {
	// 	isSave = false
	// }

	// sendResponse('我收到你的消息了：' + JSON.stringify("request"));
	sendResponse({url: url, fileName: fileName, target: event_target});
	// console.log(request)
	// console.log(sender)
	// console.log(sendResponse)
});
document.addEventListener("contextmenu", function (event) {
	saveImage(event)
	event_target = event;
});