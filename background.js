chrome.runtime.onInstalled.addListener(function() {
  console.log("INSTALLED!!!!")
    chrome.storage.sync.set({socialChecked: false}, function() {
      console.log("Zen Mode social features are all turned off!");
    });
    chrome.storage.sync.set({lessonChecked: false}, function() {
      console.log("Zen Mode lesson survey feature is turned off!");
    });
    chrome.storage.sync.set({questionChecked: false}, function() {
      console.log("Zen Mode ask a question feature is turned off!");
    });
  });

  chrome.runtime.onStartup.addListener(function() {
    console.log("STARTUP!!!!")
      chrome.storage.sync.set({socialChecked: false}, function() {
        console.log("Zen Mode social features are all turned off!");
      });
      chrome.storage.sync.set({lessonChecked: false}, function() {
        console.log("Zen Mode lesson survey feature is turned off!");
      });
      chrome.storage.sync.set({questionChecked: false}, function() {
        console.log("Zen Mode ask a question feature is turned off!");
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
