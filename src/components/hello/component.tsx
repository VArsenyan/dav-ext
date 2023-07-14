import React, { useEffect, useState } from "react";
import browser, { Tabs } from "webextension-polyfill";

interface ITab {
    title?: string;
}

export const Hello = () => {
    const [currentTab, setCurrentTab] = useState<ITab | undefined>(undefined);

    useEffect(() => {
        browser.tabs
            .query({ active: true, currentWindow: true })
            .then((tabs: Tabs.Tab[]) => {
                // Pulls current tab from browser.tabs.query response
                const currentTab: Tabs.Tab | number = tabs[0];

                // Short circuits function execution is current tab isn't found
                if (currentTab) {
                    setCurrentTab(tabs[0]);
                }
            });
    }, []);

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <p className="lead mb-0">Example extension</p>
                <p className="lead mb-0">Tab name - {currentTab?.title}</p>
            </div>
        </div>
    );
};
