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

    componentWillLoad(): void {
        this.children = this.getImageItems();
    }

    private getImageItems(): HTMLAwImageItemElement[] {
        return Array.from(this.element.querySelectorAll<HTMLAwImageItemElement>('aw-image-item'));
    }

    private renderImageItem(imageElement: HTMLAwImageItemElement): JSX.Element {
        return (
            <aw-col class="size-xs-12 size-sm-6 size-md-4 size-lg-4" >
                <aw-image-item
                    class="image-gallery-item"
                    imageSrc={imageElement.imageSrc}
                    imageAlt={imageElement.imageAlt}>
                </aw-image-item>
            </aw-col>
        );
    }

    private renderImageItems(): JSX.Element[] {
        return this.children.map((imageItem) => {
            console.log(imageItem);
            return this.renderImageItem(imageItem);
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
            </Host>
        );
    }
}
