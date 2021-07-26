# aw-pdf-reader



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute    | Description | Type     | Default                                                                     |
| --------------------- | ------------ | ----------- | -------- | --------------------------------------------------------------------------- |
| `pdfSrc` _(required)_ | `pdf-src`    |             | `string` | `undefined`                                                                 |
| `workerSrc`           | `worker-src` |             | `string` | `'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/build/pdf.worker.min.js'` |


## Events

| Event             | Description                        | Type                |
| ----------------- | ---------------------------------- | ------------------- |
| `pdfLoaded`       | Emitted when file finishes loading | `CustomEvent<void>` |
| `pdfLoadingError` | Emitted when file fails to load    | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
