import { newSpecPage } from '@stencil/core/testing';
import { AwImageItem } from '../../aw-image-item/aw-image-item';
import { AwImageGallery } from '../aw-image-gallery';

describe('aw-image-gallery', () => {
    it('renders', async () => {
        const imgSrc = 'https://picsum.photos/200/300';
        const page = await newSpecPage({
            components: [AwImageGallery, AwImageItem],
            html: `
                <aw-image-gallery>
                    <aw-image-item image-src="${imgSrc}"></aw-image-item>
                </aw-image-gallery>
            `,
        });
        expect(page.root).toEqualHtml(`
            <aw-image-gallery>
                <mock:shadow-root>
                    <aw-grid>
                        <aw-row class="middle-xs">
                            <aw-col class="size-xs-12 size-sm-6 size-md-4 size-lg-4" >
                                <aw-image-item class="image-gallery-item">
                                    <mock:shadow-root>
                                        <picture>
                                            <img src="${imgSrc}"/>
                                        </picture>
                                    </mock:shadow-root>
                                </aw-image-item>
                            </aw-col>
                        </aw-row>
                    </aw-grid>
                </mock:shadow-root>
                <aw-image-item image-src="${imgSrc}">
                    <mock:shadow-root>
                        <picture>
                            <img src="${imgSrc}"/>
                        </picture>
                    </mock:shadow-root>
                </aw-image-item>
            </aw-image-gallery>
        `);
    });
});
