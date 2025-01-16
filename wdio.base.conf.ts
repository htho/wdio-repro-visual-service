import {} from "webdriverio"; // dummy for ts to include WebdriverIO type
export const defaultConfig: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            // TODO: REPORT
            "wdio-ics:options": { // TS ERROR: Object literal may only specify known properties, and '"wdio-ics:options"' does not exist in type 'RequestedStandaloneCapabilities'.
                logName: "chromeLatest",
            },
        },
        {
            browserName: 'firefox',
            "wdio-ics:options": {
                logName: "firefox-latest-one",
            },
        }
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['visual'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
