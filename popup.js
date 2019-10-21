let setSocial = document.getElementById('social');
let setLesson = document.getElementById('lesson');
let setQuestion = document.getElementById('question');

chrome.storage.sync.get(['socialChecked'], function(result) {
  console.log('Social checked value currently is ' + result.key);
});

chrome.storage.sync.get(['lessonChecked'], function(result) {
  console.log('Lesson checked value currently is ' + result.key);
});

chrome.storage.sync.get(['questionChecked'], function(result) {
  console.log('Question checked value currently is ' + result.key);
});

setSocial.addEventListener('click', function () {

    if (setSocial.checked) {
      console.log("SOCIAL CHECKED!")
      chrome.tabs.executeScript(
            { file: 'contentScriptHide.js' }
         )
        chrome.storage.sync.set({socialChecked: true}, function() {
           console.log("Zen Mode social features are turned on!");
         });
       }

    else {
      console.log("SOCIAL UNCHECKED!")
      chrome.tabs.executeScript(
            { file: 'contentScriptDefault.js' }
         )
         chrome.storage.sync.set({checked: false}, function() {
           console.log("Zen Mode social features are turned off!");
         });
       }

});

setLesson.addEventListener('click', function () {

  if (setLesson.checked) {
    console.log("LESSON CHECKED!")
    chrome.tabs.executeScript(
      { code: 'document.getElementById("js--region-sidebar-additional-content").style.display = "none"' }
    )
    chrome.storage.sync.set({lessonChecked: true}, function() {
      console.log("Zen Mode lesson survey feature is turned on!");
    });
  }
  else {
    console.log("LESSON UNCHECKED!")
    chrome.tabs.executeScript(
      { code: 'document.getElementById("js--region-sidebar-additional-content").style.display = "block"' }
    )
    chrome.storage.sync.set({lessonChecked: false}, function() {
      console.log("Zen Mode lesson survey feature is turned off!");
    });
  }

});

setQuestion.addEventListener('click', function () {

  if (setQuestion.checked) {
    console.log("QUESTION CHECKED!")
    chrome.tabs.executeScript(
      { code: 'document.getElementsByClassName("site-sidebar__actions")[0].style.display = "none"' }
    )
    chrome.storage.sync.set({questionChecked: true}, function() {
      console.log("Zen Mode ask a question feature is turned on!");
    });
  }
  else {
    console.log("QUESTION UNCHECKED!")
    chrome.tabs.executeScript(
      { code: 'document.getElementsByClassName("site-sidebar__actions")[0].style.display = "flex"' }
    )
    chrome.storage.sync.set({questionChecked: false}, function() {
      console.log("Zen Mode ask a question feature is turned off!");
    });
  }

});
