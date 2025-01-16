import { defaultConfig } from "./wdio.base.conf";
import type { ClassOptions } from 'webdriver-image-comparison';
import path from "path";

type VisualServiceOptions = ClassOptions;

export const config: WebdriverIO.Config = {
    ...defaultConfig,

    logLevel: "error",
    
    // resolveSnapshotPath(testPath, _snapExtension) {
	// 	const cwd = process.cwd();
	// 	const testPathRel = path.relative(cwd, testPath);
	// 	const joined = path.join(cwd, "screenshots", testPathRel);
	// 	// we need the trailing "_" because there is an exception otherwise
	// 	// ERROR @wdio/utils:shim: Error: EISDIR: illegal operation on a directory, read
	// 	return joined+"_";
	// },

	services: [
        [
            "visual",
            {
                // savePerInstance: false,
            } satisfies VisualServiceOptions,
        ],
    ],
}
