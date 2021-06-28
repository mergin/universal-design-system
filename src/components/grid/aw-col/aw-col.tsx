import { Component, Host, h } from '@stencil/core';

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
