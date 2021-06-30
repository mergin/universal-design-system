import { newSpecPage } from '@stencil/core/testing';
import { AwImageItem } from '../aw-image-item';

describe('aw-image-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwImageItem],
      html: `<aw-image-item></aw-image-item>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-image-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-image-item>
    `);
  });
});
