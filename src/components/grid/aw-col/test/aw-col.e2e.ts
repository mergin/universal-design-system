import { newE2EPage } from '@stencil/core/testing';

describe('aw-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-col></aw-col>');

    const element = await page.find('aw-col');
    expect(element).toHaveClass('hydrated');
  });
});
