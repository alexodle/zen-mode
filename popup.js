let setSocial = document.getElementById('social');
let setLesson = document.getElementById('lesson');
let setQuestion = document.getElementById('question');


setSocial.addEventListener('click', function () {

    if (setSocial.checked) {
      chrome.tabs.executeScript(
            { file: 'contentScriptHide.js' }
         )
       }
    else {
      chrome.tabs.executeScript(
            { file: 'contentScriptDefault.js' }
         )}
});

setLesson.addEventListener('click', function () {

  if (setLesson.checked) {
    chrome.tabs.executeScript(
      { code: 'document.getElementById("js--region-sidebar-additional-content").style.display = "none"' }
    )
  }
  else {
    chrome.tabs.executeScript(
      { code: 'document.getElementById("js--region-sidebar-additional-content").style.display = "block"' }
    )
  }

});

setQuestion.addEventListener('click', function () {

  if (setQuestion.checked) {
    chrome.tabs.executeScript(
      { code: 'document.getElementsByClassName("site-sidebar__actions")[0].style.display = "none"' }
    )
  }
  else {
    chrome.tabs.executeScript(
      { code: 'document.getElementsByClassName("site-sidebar__actions")[0].style.display = "flex"' }
    )
  }

});
