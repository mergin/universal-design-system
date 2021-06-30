import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'aw-image-gallery',
    styleUrl: 'aw-image-gallery.scss',
    shadow: true,
})
export class AwImageGallery {

    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
