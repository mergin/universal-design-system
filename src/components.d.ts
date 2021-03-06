/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AwComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAwComponentElement extends Components.AwComponent, HTMLStencilElement {
    }
    var HTMLAwComponentElement: {
        prototype: HTMLAwComponentElement;
        new (): HTMLAwComponentElement;
    };
    interface HTMLElementTagNameMap {
        "aw-component": HTMLAwComponentElement;
    }
}
declare namespace LocalJSX {
    interface AwComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "aw-component": AwComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "aw-component": LocalJSX.AwComponent & JSXBase.HTMLAttributes<HTMLAwComponentElement>;
        }
    }
}
