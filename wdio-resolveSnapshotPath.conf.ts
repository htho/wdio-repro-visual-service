import { defaultConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';
import path from "path";

type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...defaultConfig,

    logLevel: "error",
    
    // TODO: REPORT setting up this, throws an error, but tests continue...
    // ERROR @wdio/utils:shim: Error: EISDIR: illegal operation on a directory, read
    resolveSnapshotPath(testPath, _snapExtension) {
		const cwd = process.cwd();
		const testPathRel = path.relative(cwd, testPath);
		const joined = path.join(cwd, "screenshots", testPathRel);
		return joined;
	},

	services: [
        [
            "visual",
            {
            } satisfies VisualServiceOptions,
        ],
    ],
}
