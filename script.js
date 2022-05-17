// chrome.runtime.onMessage.addListener(
// 	function (request, sender, sendResponse) {
// 		console.log(request)
// 		console.log(sender)
// 		console.log("in script")
// 		return true;
// 	}
// );
console.log("script outer message")


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(request, sender, sendResponse);
    sendResponse('我收到你的消息了：' + JSON.stringify("request"));
    // console.log(request)
    // console.log(sender)
    // console.log(sendResponse)
});

document.addEventListener("contextmenu", function (event) {
    let div = event.target;
    console.log(div);
    console.log(typeof div)
    console.log(div.classList)
    console.log(div.attributes)
    if ("role" in div.attributes) {
        console.log("role")
    } else {
        const url = div.previousElementSibling.firstElementChild.getAttribute('src'),
            fileName = url.match(/(\/[\w]*.((jpg)|(png)))/);
        saveAs(url, fileName[0].replace("/", ""))
    }

    // console.log(event)
    // console.log(document.querySelector(event.target).previousSibling)
});
