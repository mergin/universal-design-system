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
     *
     */
    private modalContainer: HTMLDivElement;

    componentWillLoad(): void {
        this.children = this.getImageItems();
    }

    private openModal(imageElement: HTMLAwImageItemElement): void {
        this.modalContainer.querySelector('.modal').appendChild(imageElement);
        this.modalContainer.classList.add('open-modal');

        // body fix. TODO: move to modal component
        document.body.style.overflow = 'hidden';
    }

    private closeModal() {
        const modal = this.modalContainer.querySelector('.modal') as HTMLElement;
        modal.ontransitionend = () => {
            modal.innerHTML = '';
            modal.ontransitionend = null;
        };
        this.modalContainer.classList.remove('open-modal');

        // body fix. TODO: move to modal component
        document.body.style.overflow = 'auto';
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
                class="image-gallery-item"
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
                <div
                    class="modal-container"
                    ref={(el) => this.modalContainer = el as HTMLDivElement}>

                    <div class="modal"></div>

                    <a onClick={() => this.closeModal()} class="modal-bg"></a>
                </div>
            </Host>
        );
    }
}
