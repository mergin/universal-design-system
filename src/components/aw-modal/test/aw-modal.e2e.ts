import { newE2EPage } from '@stencil/core/testing';

describe('aw-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<aw-modal></aw-modal>');

        const element = await page.find('aw-modal');
        expect(element).toHaveClass('hydrated');
    });
});
