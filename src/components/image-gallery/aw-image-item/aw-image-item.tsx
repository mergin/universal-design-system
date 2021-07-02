import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'aw-image-item',
    styleUrl: 'aw-image-item.scss',
    shadow: true,
})
export class AwImageItem {

    /**
     * Reference to the Host element
     */
    @Element() private readonly element!: HTMLAwImageItemElement;

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

    /**
     * Event emitted on error with the image loading
     */
    @Event({
        composed: false,
        cancelable: false,
        bubbles: false,
    })
    imageItemError!: EventEmitter<void>;

    private imageErrorHandler(): void {
        this.imageItemError.emit();
    }

    render(): JSX.Element {
        return (
            <Host>
                <picture>
                    <img onError={() => this.imageErrorHandler()} src={this.imageSrc} alt={this.imageAlt} height={this.imageHeight} width={this.imageWidth} />
                </picture>
            </Host>
        );
    }

}
