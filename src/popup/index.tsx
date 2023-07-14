import React from "react";
import ReactDOM from "react-dom/client";
import browser from "webextension-polyfill";
import { Popup } from "./component";
import "../css/app.css";

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    const root = ReactDOM.createRoot(document.getElementById("popup") as HTMLElement);

    root.render(<Popup />);
});
