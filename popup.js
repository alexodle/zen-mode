let setSocial = document.getElementById('social');
let setLesson = document.getElementById('lesson');
let setQuestion = document.getElementById('question');

chrome.storage.sync.get(['lessonChecked', 'socialChecked', 'questionChecked'], function (result) {
  setLesson.checked = result.lessonChecked;
  setSocial.checked = result.socialChecked;
  setQuestion.checked = result.questionChecked;

  setSocial.disabled = false;
  setLesson.disabled = false;
  setQuestion.disabled = false;
});

function toggleContents() {
  chrome.tabs.executeScript({file: 'toggleContents.js'});
}

setSocial.addEventListener('click', function () {
  chrome.storage.sync.set({socialChecked: setSocial.checked}, toggleContents);
});

setLesson.addEventListener('click', function () {
  chrome.storage.sync.set({lessonChecked: setLesson.checked}, toggleContents);
});

setQuestion.addEventListener('click', function () {
  chrome.storage.sync.set({questionChecked: setQuestion.checked}, toggleContents);
});
