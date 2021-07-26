import { newE2EPage } from '@stencil/core/testing';

describe('aw-pdf-reader', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<aw-pdf-reader></aw-pdf-reader>');

        const element = await page.find('aw-pdf-reader');
        expect(element).toHaveClass('hydrated');
    });
});
