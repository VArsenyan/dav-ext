import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
    if (request.popupMounted) {
        console.log("backgroundPage notified that Popup.tsx has mounted.");
    }
});
