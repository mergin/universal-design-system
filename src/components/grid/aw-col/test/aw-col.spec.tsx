import { newSpecPage } from '@stencil/core/testing';
import { AwCol } from '../aw-col';

describe('aw-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwCol],
      html: `<aw-col></aw-col>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-col>
    `);
  });
});
