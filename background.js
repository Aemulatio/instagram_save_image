function setUpContextMenus() {
	chrome.contextMenus.create({
		title: "Save|Скачать",
		type: "normal",
		id: "save",
		contexts: ["image", "page"],
		checked: true
	})
}

chrome.runtime.onInstalled.addListener(function () {
	// When the app gets installed, set up the context menus
	setUpContextMenus();
	console.log("installed")
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
	console.log("context clicked")

	console.log("func params:")
	console.log(info)
	console.log(tab)

	chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			console.log(response);
		});
	});


});
