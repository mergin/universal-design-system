import { Component, Host, h } from '@stencil/core';

/**
 * The column component for the Grid System
 *
 * @slot default - Contains any element to be positioned inside the grid
 *
 * @see {@link [http://flexboxgrid.com/]| Flexbox Grid} for the open source project on which it's based
 */
@Component({
    tag: 'aw-col',
    styleUrl: 'aw-col.scss',
    shadow: true,
})
export class AwCol {

    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
