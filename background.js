chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({checked: true}, function() {
      console.log("Zen Mode is turned on!");
    });
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'learn.co'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
