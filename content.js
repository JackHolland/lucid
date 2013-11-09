$(document).ready(function () {
	var transMs = 1000;
	$("<div id='lucidMessage'></div>").appendTo("body");
	var messageBox = $(document).find("div#lucidMessage");
	messageBox.hide();
	messageBox.click(function () {
		messageBox.hide(transMs);
	});
	
	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
		messageBox.html(message);
		messageBox.show(transMs);
		sendResponse({});
	});
});

