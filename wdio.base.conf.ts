// dummy for ts to include WebdriverIO type for the first time
// has no effect once there are more imports pointing at "webdriverio"
// or packages depending on it.
import {} from "webdriverio";
export const baseConfig: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            // REPORT it IS possible to setup wdio-ics:options for non multi-remote configurations.
            // https://github.com/webdriverio/visual-testing/issues/731
            "wdio-ics:options": {
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
