import { newSpecPage } from '@stencil/core/testing';
import { AwModal } from '../aw-modal';

describe('aw-modal', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [AwModal],
            html: `<aw-modal></aw-modal>`,
        });
        expect(page.root).toEqualHtml(`
            <aw-modal>
                <mock:shadow-root>
                <slot></slot>
                </mock:shadow-root>
            </aw-modal>
        `);
    });
});
