import { defaultConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';

// https://github.com/webdriverio/visual-testing/blob/f4d9e654a746d09e9ca2567ffe69200c161cc14b/packages/visual-service/src/types.ts#L62
type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...defaultConfig,
	services: [
        [
            "visual",
            {
                /**
                 * `browserName`: The name of the browser in the provided capabilities
                 * `browserVersion`: The version of the browser provided in the capabilities
                 * `deviceName`: The device name from the capabilities
                 * `dpr`: The device pixel ratio
                 * `height`: The height of the screen
                 * 
                 * `logName`: The logName from capabilities
                 * ^^^^^^^^^^^ NOTE: IT WOULD BE GOOD TO HAVE A LINK TO wdio-ics:options HERE
                 * TODO: REPORT
                 * 
                 * `mobile`: This will add _app, or the browser name after the deviceName to distinguish app screenshots from browser screenshots
                 * `platformName`: The name of the platform in the provided capabilities
                 * `platformVersion`: The version of the platform provided in the capabilities
                 * `tag`: The tag that is provided in the methods that is being called
                 * `width`: The width of the screen
                 */
                formatImageName: `{browserName}-{browserVersion}-{deviceName}-{dpr}-{height}-{logName}-{mobile}-{platformName}-{tag}-{width}`,
            } satisfies VisualServiceOptions,
        ],
    ],
}
