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

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	console.log("context clicked")
	if (tab) {
		console.log("in tab clicked")
		chrome.tabs.sendMessage(tab.id, "clicked send message", function (response) {
			// ...
			console.log("send message")
		});
	}
});


function mycallback(info, tab) {
	chrome.tabs.sendMessage(tab.id, "getClickedEl", {frameId: info.frameId}, data => {
		// elt.value = data.value;
		console.log("data", data)
		console.log(info)
	});
}