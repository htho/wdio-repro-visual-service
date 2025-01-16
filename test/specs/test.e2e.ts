import { expect, browser, $ } from '@wdio/globals'

beforeEach(async () => {
    await browser.url(`https://htho.github.io/wdio-repro-visual-service/`);
    await browser.setWindowSize(1024, 768);
});

describe('Screenshot', () => {
    it('should take a screenshot', async () => {
        await expect($(`#someContent`)).toMatchElementSnapshot('someContent');
    });
})

