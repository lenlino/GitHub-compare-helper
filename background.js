chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.includes('/commits') && changeInfo.status === 'complete') {
        if (tab.url.includes('/pull/')) {
            injectPullRequestScripts(tabId);
        } else {
            injectProjectScripts(tabId);
        }
    }
});

function injectProjectScripts(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["script.js"]
    });
    chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["styles.css"]
    });
}

function injectPullRequestScripts(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["script.js"]
    });
    chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["styles.css"]
    });
}