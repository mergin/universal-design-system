import { Component, Host, h } from '@stencil/core';

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
