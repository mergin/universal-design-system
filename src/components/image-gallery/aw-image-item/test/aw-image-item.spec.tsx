import { newSpecPage } from '@stencil/core/testing';
import { AwImageItem } from '../aw-image-item';

describe('aw-image-item', () => {
    it('renders', async () => {
        const imgSrc = 'https://picsum.photos/200/300';
        const page = await newSpecPage({
            components: [AwImageItem],
            html: `<aw-image-item image-src="${imgSrc}"></aw-image-item>`,
        });
        expect(page.root).toEqualHtml(`
            <aw-image-item image-src="${imgSrc}">
                <mock:shadow-root>
                    <picture>
                        <img src="${imgSrc}"/>
                    </picture>
                </mock:shadow-root>
            </aw-image-item>
        `);
    });
});
