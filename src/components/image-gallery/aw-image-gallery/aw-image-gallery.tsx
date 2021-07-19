import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
    tag: 'aw-image-gallery',
    styleUrl: 'aw-image-gallery.scss',
    shadow: true,
})
export class AwImageGallery {

    /**
     * Reference to the Host element
     */
    @Element() private readonly element!: HTMLAwImageGalleryElement;

    /**
     * Reference to the Image Item children elements that are children of the Host element
     */
    @State() private children: HTMLAwImageItemElement[] = [];

    /**
     * Reference to the modal element
     */
    private modalElement!: HTMLAwModalElement;

    componentWillLoad(): void {
        this.children = this.getImageItems();
    }

    private openModal(imageElement: HTMLAwImageItemElement): void {
        this.modalElement.innerHTML = '';
        this.modalElement.appendChild(imageElement);
        this.modalElement.open();
    }

    private getImageItems(): HTMLAwImageItemElement[] {
        return Array.from(this.element.querySelectorAll<HTMLAwImageItemElement>('aw-image-item'));
    }

    private imageItemErrorHandler(event: CustomEvent<void>): void {
        (event.target as HTMLAwImageItemElement).parentElement.classList.add('error-image');
    }

    private renderImageItem(imageElement: HTMLAwImageItemElement): JSX.Element {
        return (
            <aw-image-item
                class='image-gallery-item'
                imageSrc={imageElement.imageSrc}
                imageAlt={imageElement.imageAlt}
                onClick={() => this.openModal(imageElement)}
                onImageItemError={(ev) => this.imageItemErrorHandler(ev)}>
            </aw-image-item>
        );
    }

    private renderImageItems(): JSX.Element[] {
        return this.children.map((imageItem) => {
            return (
                <aw-col class="size-xs-12 size-sm-6 size-md-4 size-lg-4">
                    {this.renderImageItem(imageItem)}
                </aw-col>
            );
        });
    }

    render(): JSX.Element {
        return (
            <Host>
                <aw-grid>
                    <aw-row class="middle-xs">
                        {this.renderImageItems()}
                    </aw-row>
                </aw-grid>

                {/* modal */}
                <aw-modal
                    ref={(el) => this.modalElement = el as HTMLAwModalElement}
                    no-padding
                    no-border>
                </aw-modal>
            </Host>
        );
    }
}
