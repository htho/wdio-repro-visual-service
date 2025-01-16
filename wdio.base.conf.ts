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
        },
        {
            browserName: 'firefox',
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
