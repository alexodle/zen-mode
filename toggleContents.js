function getStyle(selector, visible) {
  const display = visible ? 'block' : 'none';
  return `${selector} { display: ${display} !important; }`;
}

function withExistingStyleElement(cb) {
  let el = document.getElementById('zen-style');
  if (el) {
    cb(el);
  }
  return !!el;
}

function withNewStyleElement(cb) {
  const el = document.createElement('style');
  el.id = 'zen-style';

  cb(el);

  const intId = setInterval(function () {
    if (document.head) {
      clearInterval(intId);
      document.head.append(el);
    }
  }, 10);
}

function withStyleElement(cb) {
  withExistingStyleElement(cb) || withNewStyleElement(cb);
}

function setStyle(contents) {
  withStyleElement(function (el) {
    el.textContent = contents;
  });
}

chrome.storage.sync.get(['lessonChecked', 'socialChecked', 'questionChecked'], function (result) {
  const styles = [
    getStyle('#js--region-sidebar-additional-content', !result.lessonChecked),

    getStyle('#js--friends-widget', !result.socialChecked),
    getStyle('.bubble-bar__label', !result.socialChecked),
    getStyle('.bubble-bar__list', !result.socialChecked),

    getStyle('.site-sidebar__actions', !result.questionChecked)
  ];

  setStyle(styles.join('\n'));
});
