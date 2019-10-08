let setZen = document.getElementById('setZen');

// chrome.storage.sync.get('checked', function(data) {
//   setZen.checked = data.checked;
// });


setZen.addEventListener('click', function () {
    //code here
    if (setZen.checked) {
      chrome.tabs.executeScript(
            { file: 'contentScript.js' }
         )}
    else {
      chrome.tabs.executeScript(
            { file: 'contentScriptDefault.js' }
         )}
});

// setZen.onclick = function() {
//
//  };

 // chrome.storage.sync.set({checked: setZen.checked, function() {
 //   console.log(`Zen Mode checked status is ` + setZen.checked);
 // }
 // });
