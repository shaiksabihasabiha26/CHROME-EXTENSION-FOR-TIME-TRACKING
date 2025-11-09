// background.js
let activeTab = null;
let startTime = null;

// When the active tab changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (startTime && activeTab) {
    const timeSpent = (Date.now() - startTime) / 1000; // seconds

    // Send time data to backend
    fetch("http://localhost:5000/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: activeTab.url, timeSpent }),
    });
  }

  const tab = await chrome.tabs.get(activeInfo.tabId);
  activeTab = tab;
  startTime = Date.now();
});

// When tab URL updates (navigates)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    activeTab = tab;
    startTime = Date.now();
  }
});
