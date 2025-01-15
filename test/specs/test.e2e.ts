import { expect, browser, $ } from '@wdio/globals'

beforeEach(async () => {
    await browser.url(`https://htho.github.io/wdio-repro-visual-service/`)
});

describe('Screenshot', () => {
    it('should take a screenshot', async () => {
        await expect($(`#someContent`)).toMatchElementSnapshot('someContent');
    });
})

