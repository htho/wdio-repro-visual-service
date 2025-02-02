// this is basically the example from
// https://webdriver.io/docs/visual-testing/#webdriverio-multiremote
export const _baseConfig: WebdriverIO.MultiremoteConfig = {
    capabilities: {
        chromeBrowserOne: {
            capabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: ["disable-infobars"],
                },
                // THIS!!!
                // REPORTED https://github.com/webdriverio/visual-testing/issues/732
                "wdio-ics:options": { // TS ERROR: Object literal may only specify known properties, and '"wdio-ics:options"' does not exist in type 'RequestedStandaloneCapabilities'.
                    logName: "chrome-latest-one",
                },
            },
        },
        chromeBrowserTwo: {
            capabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: ["disable-infobars"],
                },
                // THIS!!!
                "wdio-ics:options": {
                    logName: "chrome-latest-two",
                },
            },
        },
    },
}
