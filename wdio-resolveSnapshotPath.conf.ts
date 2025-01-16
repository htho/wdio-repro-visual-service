import { baseConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';
import path from "path";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    capabilities: [baseConfig.capabilities[0]],

    logLevels: {
        "webdriver": "error",
        "chromedriver": "error",
    },

    reporters: [],
    
    // REPORTED setting up this, throws an error, but tests continue...
    // https://github.com/webdriverio/visual-testing/issues/734
    // ERROR @wdio/utils:shim: Error: EISDIR: illegal operation on a directory, read
    resolveSnapshotPath(testPath, _snapExtension) {
        const cwd = process.cwd();
        const testPathRel = path.relative(cwd, testPath);
        const joined = path.join(cwd, "screenshots", testPathRel);
        return joined;
    },

    services: [["visual", {}]],
}
