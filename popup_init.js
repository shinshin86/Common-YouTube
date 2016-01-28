function getPageDetails(callback) { 
    chrome.tabs.executeScript(null, { file: 'content_script.js' }); 
}; 

