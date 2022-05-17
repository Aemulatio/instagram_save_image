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
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
	chrome.tabs.sendMessage(tab.id, {menuItemId: "save"}, function (response) {
		chrome.scripting.executeScript({
			func: save,
			args: [response.url, response.fileName],
			target: {tabId: tab.id}
		})
	});

});
function save(url, fileName){
	saveAs(url, fileName);

}
