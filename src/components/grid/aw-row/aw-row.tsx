import { Component, Host, h } from '@stencil/core';

/**
 * The row component for the Grid System
 *
 * @slot default - Contains the columns
 *
 * @see {@link [http://flexboxgrid.com/]| Flexbox Grid} for the open source project on which it's based
 */
@Component({
    tag: 'aw-row',
    styleUrl: 'aw-row.scss',
    shadow: true,
})
export class AwRow {

    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
