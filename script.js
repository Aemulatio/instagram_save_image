chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		console.log(request)
		console.log(sender)
		console.log("in script")
		return true;
	}
);
console.log("script outer message")