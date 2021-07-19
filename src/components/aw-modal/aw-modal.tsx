import { Component, Host, h, Element, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
    tag: 'aw-modal',
    styleUrl: 'aw-modal.scss',
    shadow: true,
})
export class AwModal {

    /**
     * Reference to the Host element
     */
    @Element() private readonly element!: HTMLAwModalElement;

    /**
     * Indicates if the modal should have a padding
     */
    @Prop() noPadding?: boolean;

    /**
     * Indicates if the modal should have round borders
     */
    @Prop() noBorder?: boolean;

    /**
     * Event emitted when the modal is closed
     */
    @Event()
    modalClosed!: EventEmitter<boolean>;

    @Method()
    async open(): Promise<void> {
        this.element.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
    }

    @Method()
    async close(): Promise<void> {
        this.element.classList.remove('open-modal');
        this.modalClosed.emit(true);
        document.body.style.overflow = 'auto';
    }

    render(): JSX.Element {
        return (
            <Host class='modal-container'>
                <div class="modal">
                    <slot></slot>
                </div>
                <div onClick={() => this.close()} class="modal-background"></div>
            </Host>
        );
    }

}
