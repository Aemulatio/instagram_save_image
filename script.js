chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request)
	console.log(sender)
	console.log(sendResponse)
	console.log("in script")
	// sendResponse(myFunc(request.args));
});