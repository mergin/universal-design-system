import { newE2EPage } from '@stencil/core/testing';

describe('aw-image-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-image-item></aw-image-item>');

    const element = await page.find('aw-image-item');
    expect(element).toHaveClass('hydrated');
  });
});
