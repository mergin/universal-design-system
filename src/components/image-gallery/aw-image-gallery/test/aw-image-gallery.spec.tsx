import { newSpecPage } from '@stencil/core/testing';
import { AwImageGallery } from '../aw-image-gallery';

describe('aw-image-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwImageGallery],
      html: `<aw-image-gallery></aw-image-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-image-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-image-gallery>
    `);
  });
});
