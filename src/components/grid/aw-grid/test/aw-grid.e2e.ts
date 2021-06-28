import { newE2EPage } from '@stencil/core/testing';

describe('aw-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-grid></aw-grid>');

    const element = await page.find('aw-grid');
    expect(element).toHaveClass('hydrated');
  });
});
