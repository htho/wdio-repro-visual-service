import { defaultConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';
import path from "path";

type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...defaultConfig,
	services: [
        [
            "visual",
            {
                // TODO: REPORT options is `this` object - it is useless
                screenshotPath(options) {
                    // TODO: REPORT the example makes no sense:
                    // https://webdriver.io/docs/visual-testing/service-options#screenshotpath

                    // TS ERROR Property 'specs' does not exist on type 'ClassOptions'
                    // RUNTIME ERROR: Error: Error: Failed to initialise launcher service "visual": TypeError: Cannot read properties of undefined (reading '0')
                    // TODO: REPORT
                    const testFolder = path.dirname(options.specs[0]);
                    // TODO: REPORT what is `type` supposed to be?
                    return path.join(testFolder, "snapshots", type);
                },
            } satisfies VisualServiceOptions,
        ],
    ],
}
