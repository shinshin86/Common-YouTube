var callbacks = [];
function getSelectedText(callback) {
  chrome.tabs.getSelected(null, function(currentTab) {
    chrome.tabs.executeScript(null, { file: "content_script.js" });
  });
};
chrome.extension.onRequest.addListener(function(request) {
  var callback = callbacks.shift();
  callback(request);
});
