import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from '../aw-component';

describe('aw-component', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [MyComponent],
            html: '<aw-component></aw-component>',
        });
        expect(root).toEqualHtml(`
            <aw-component>
                <mock:shadow-root>
                <div>
                    Hello, World! I'm
                </div>
                </mock:shadow-root>
            </aw-component>
        `);
    });

    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [MyComponent],
            html: `<aw-component first="Stencil" last="'Don't call me a framework' JS"></aw-component>`,
        });
        expect(root).toEqualHtml(`
            <aw-component first="Stencil" last="'Don't call me a framework' JS">
                <mock:shadow-root>
                <div>
                    Hello, World! I'm Stencil 'Don't call me a framework' JS
                </div>
                </mock:shadow-root>
            </aw-component>
        `);
    });
});
