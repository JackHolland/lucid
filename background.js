document.addEventListener('DOMContentLoaded', function () {
	var msInMin = 1000 * 60;
	var maxMin = 30;
	
	var setBadge = function (message) {
		chrome.browserAction.setBadgeText({text: String(message)});
	};
	
	var displayMessage = function (message) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
				initTime(maxMin);
			});
		});
	};
	
	var initTime = function (minutes) {
		var updateTime = function () {
			minutes -= 1;
			setBadge(minutes);
			if (minutes == 0) {
				displayMessage("Are you dreaming?");
			} else {
				setTimeout(updateTime, msInMin);
			}
		};
		
		setTimeout(updateTime, msInMin);
		setBadge(minutes);
	};
	
	chrome.browserAction.setBadgeBackgroundColor({color: "#09F"});
	initTime(maxMin);
});

