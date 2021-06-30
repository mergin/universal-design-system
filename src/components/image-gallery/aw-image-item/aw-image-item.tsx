import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'aw-image-item',
    styleUrl: 'aw-image-item.scss',
    shadow: true,
})
export class AwImageItem {

    /**
     *
     */
    @Prop() imageSrc!: string;

    /**
     *
     */
    @Prop() imageAlt?: string;

    /**
     *
     */
    @Prop() imageHeight?: string;

    /**
     *
     */
    @Prop() imageWidth?: string;

    render(): JSX.Element {
        return (
            <Host>
                <img src={this.imageSrc} alt={this.imageAlt} height={this.imageHeight} width={this.imageWidth} />
                <a />
            </Host>
        );
    }

}
