import { newSpecPage } from '@stencil/core/testing';
import { AwPdfReader } from '../aw-pdf-reader';

describe('aw-pdf-reader', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [AwPdfReader],
            html: `<aw-pdf-reader></aw-pdf-reader>`,
        });
        expect(page.root).toEqualHtml(`
            <aw-pdf-reader>
                <mock:shadow-root>
                <slot></slot>
                </mock:shadow-root>
            </aw-pdf-reader>
        `);
    });
});
