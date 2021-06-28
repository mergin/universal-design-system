import { newSpecPage } from '@stencil/core/testing';
import { AwGrid } from '../aw-grid';

describe('aw-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwGrid],
      html: `<aw-grid></aw-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-grid>
    `);
  });
});
