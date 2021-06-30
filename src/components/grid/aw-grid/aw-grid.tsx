import { Component, Host, h } from '@stencil/core';

/**
 * This grid system is build with CSS flex display property.
 * It is based on Flexbox Grid open source project
 *
 * @slot default - Contains the rows which contain the columns
 *
 * @see {@link [http://flexboxgrid.com/]| Flexbox Grid} for the open source project on which it's based
 */
@Component({
    tag: 'aw-grid',
    styleUrl: 'aw-grid.scss',
    shadow: true,
})
export class AwGrid {

    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
