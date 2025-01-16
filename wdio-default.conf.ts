import { defaultConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';

// should be exported
// TODO: REPORT
// https://github.com/webdriverio/visual-testing/blob/f4d9e654a746d09e9ca2567ffe69200c161cc14b/packages/visual-service/src/types.ts#L62
type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...defaultConfig,
	services: [
        [
            "visual",
            {
              // no automatic type information
              // therefore the `satisfies VisualServiceOptions` below.
              // TODO: REPORT
            } satisfies VisualServiceOptions,
        ],
    ],
}
