import { newE2EPage } from '@stencil/core/testing';

describe('aw-image-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-image-gallery></aw-image-gallery>');

    const element = await page.find('aw-image-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
