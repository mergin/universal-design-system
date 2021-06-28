import { Component, Host, h } from '@stencil/core';

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
