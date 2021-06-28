import { newE2EPage } from '@stencil/core/testing';

describe('aw-component', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<aw-component></aw-component>');
        const element = await page.find('aw-component');
        expect(element).toHaveClass('hydrated');
    });

    it('renders changes to the name data', async () => {
        const page = await newE2EPage();

        await page.setContent('<aw-component></aw-component>');
        const component = await page.find('aw-component');
        const element = await page.find('aw-component >>> div');
        expect(element.textContent).toEqual(`Hello, World! I'm `);

        component.setProperty('first', 'James');
        await page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James`);

        component.setProperty('last', 'Quincy');
        await page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

        component.setProperty('middle', 'Earl');
        await page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
    });
});
