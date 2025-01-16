import { baseConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';

// https://github.com/webdriverio/visual-testing/blob/f4d9e654a746d09e9ca2567ffe69200c161cc14b/packages/visual-service/src/types.ts#L62
type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...baseConfig,
    services: [
        [
            "visual",
            {
                // REPORTED it is not possible to create paths in formatImageName.
                // https://github.com/webdriverio/visual-testing/issues/730
                // * This should be documented.
                // * Could be a simpler alternative to resolveSnapshotPath and screenshotPath.
                //
                // RuntimeError:
                //      Image could not be copied. The following error was thrown:
                //      Error: ENOENT: no such file or directory, open 'C:\dev\github.com\htho\wdio-repro-visual-service\screenshots\test\specs\test.e2e.ts\firefox-latest-one\1024x768p1--someContent.png'
                formatImageName: `{logName}/{width}x{height}p{dpr}--{tag}`,
            } satisfies VisualServiceOptions,
        ],
    ],
}
