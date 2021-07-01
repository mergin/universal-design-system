import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'aw-image-gallery',
    styleUrl: 'aw-image-gallery.scss',
    shadow: true,
})
export class AwImageGallery {

    @Prop() columns: 3 | 4 | 5 = 3;

    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
