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

// chrome.contextMenus.onClicked.addListener(function (itemData, tab) {
// 	console.log("clicked")
// 	console.log(itemData)
// 	console.log(tab)
// 	console.log(chrome)
// 	console.log(chrome.contextMenus)
//
// 	// mycallback(itemData, tab)
// });

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	console.log("context clicked")
	if (tab) {
		console.log("in tab clicked")
		// console.log(chrome.tabs)
		// chrome.tabs.sendMessage(tab.id, {message: "clicked send message"}, function (response) {
		// 	// ...
		// 	console.log(response)
		// 	console.log(tab)
		// 	console.log(tab.id)
		// 	console.log("send message")
		// 	return true;
		//
		// });

		
	}
});
