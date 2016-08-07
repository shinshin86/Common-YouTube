function onPageDetailsReceived(pageDetails)  { 
} 
 // Get the event page
chrome.runtime.getBackgroundPage(function(eventPage) {
  eventPage.getPageDetails(onPageDetailsReceived);
});
