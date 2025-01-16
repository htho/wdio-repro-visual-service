import { baseConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';
import path from "path";

type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...baseConfig,
    services: [
        [
            "visual",
            {
                // REPORTED options is `this` object - it is useless
                // https://github.com/webdriverio/visual-testing/issues/733
                baselineFolder: (options) => {
                    // TS ERROR Property 'specs' does not exist on type 'ClassOptions'
                    // RUNTIME ERROR: Error: Error: Failed to initialise launcher service "visual": TypeError: Cannot read properties of undefined (reading '0')
                    // REPORTED
                    // https://github.com/webdriverio/visual-testing/issues/733
                    const testFolder = path.dirname(options.specs[0]);
                    // REPORTED what is `type` supposed to be?
                    // https://github.com/webdriverio/visual-testing/issues/733
                    return path.join(testFolder, "snapshots", type);
                },
            } satisfies VisualServiceOptions,
        ],
    ],
}
