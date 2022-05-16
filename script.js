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
        console.log(div.previousElementSibling)
        console.log(div.previousElementSibling.firstElementChild)
        console.log(div.previousElementSibling.firstElementChild.getAttribute('src'))
        downloadURI(div.previousElementSibling.firstElementChild.getAttribute('src'), "instagram_image.jpg")
    }

    // console.log(event)
    // console.log(document.querySelector(event.target).previousSibling)
});

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.target = "_blank"
    // link.setAttribute("")
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
    // delete link;
}