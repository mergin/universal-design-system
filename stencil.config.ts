import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
    namespace: 'universal-design-system',
    plugins: [
        sass(),
        nodePolyfills()
    ],
    // rollupPlugins: {
    //     after: [
    //         // Plugins injected after commonjs()
    //         nodePolyfills()
    //     ]
    // },
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
};
