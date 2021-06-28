import { newSpecPage } from '@stencil/core/testing';
import { AwRow } from '../aw-row';

describe('aw-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwRow],
      html: `<aw-row></aw-row>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-row>
    `);
  });
});
