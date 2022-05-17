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
	// if (info.menuItemId === "save") {
	// chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
	chrome.tabs.sendMessage(tab.id, {menuItemId: "save"}, function (response) {
		console.log(response);
		chrome.scripting.executeScript({
			func: save,
			args: [response.url, response.fileName],
			target: {tabId: tab.id}
		})
	});
	// }
	// });


});
function save(url, fileName){
	saveAs(url, fileName);

}
