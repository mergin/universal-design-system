import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { PDFDocumentProxy, PDFPageProxy, PDFInfo, PDFMetadata } from 'pdfjs-dist/webpack';
import pdfjs from '@bundled-es-modules/pdfjs-dist/build/pdf';

@Component({
    tag: 'aw-pdf-reader',
    styleUrl: 'aw-pdf-reader.scss',
    shadow: true,
})
export class AwPdfReader {

    /**
     *
     */
    private pdfMetadata: {
        info: PDFInfo;
        metadata: PDFMetadata;
    }

    /**
     * Reference to the pdf viewer element
     */
    private pdfViewerElement: HTMLDivElement;

    /**
     * Reference to the Host element
     */
    @Element() private readonly element!: HTMLAwPdfReaderElement;

    /**
     *
     */
    @Prop() pdfSrc!: string;

    /**
     *
     */
    @Prop() workerSrc: string = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/build/pdf.worker.min.js';

    /**
     * Emitted when file finishes loading
     */
    @Event() pdfLoaded!: EventEmitter<void>;

    /**
     * Emitted when file fails to load
     */
    @Event() pdfLoadingError!: EventEmitter<void>;

    componentWillLoad(): void {
        this.setPdfWorker();
    }

    async componentDidLoad(): Promise<void> {
        await this.setPdf(this.pdfSrc);
    }

    /**
     *
     */
    private setPdfWorker(): void {
        pdfjs.GlobalWorkerOptions.workerSrc = this.workerSrc;
    }

    /**
     *
     * @param pdfSrc
     */
    private async setPdf(pdfSrc: string) {
        this.clearPages();
        try {
            const pdfFile: PDFDocumentProxy = await pdfjs.getDocument(pdfSrc).promise;
            await this.setMetadata(pdfFile);
            await this.buildPages(pdfFile);
        } catch (error) {
            console.log('PDF error', error);
            this.pdfLoadingError.emit();
        }
    }

    /**
     *
     * @param pdfFile
     */
    private async setMetadata(pdfFile: PDFDocumentProxy): Promise<void> {
        this.pdfMetadata = await pdfFile.getMetadata();
    }

    /**
     *
     * @param pdfFile
     */
    private async buildPages(pdfFile: PDFDocumentProxy): Promise<void> {
        const viewer = this.pdfViewerElement;
        const pagesPromises: Promise<PDFPageProxy>[] = [...Array(pdfFile.numPages)].map((_, i) => {
            return pdfFile.getPage(i + 1)
        });

        const pages: PDFPageProxy[] = await Promise.all(pagesPromises);
        pages.forEach((page: PDFPageProxy, index: number) => {
            const canvas = document.createElement('canvas');
            const viewport = page.getViewport({ scale: 1 });
            canvas.className = `pdf-page-canvas-${index + 1}`;
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            viewer.appendChild(canvas);
            page.render({
                canvasContext: canvas.getContext('2d'),
                viewport: viewport
            });
        });
        this.pdfLoaded.emit();
    }

    /**
     * Removes the pages from previously loaded document
     */
    private clearPages(): void {
        const viewer = this.pdfViewerElement;

        if (!viewer) return;

        Array.from(viewer.children).forEach(
            (canvas) => {
                canvas.remove();
            }
        );
    }

    render(): JSX.Element {
        return (
            <Host>
                <div class='pdf-viewer'
                    ref={(el: HTMLDivElement) => this.pdfViewerElement = el}></div>
            </Host>
        );
    }

}
