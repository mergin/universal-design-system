import { newE2EPage } from '@stencil/core/testing';

describe('aw-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-row></aw-row>');

    const element = await page.find('aw-row');
    expect(element).toHaveClass('hydrated');
  });
});
