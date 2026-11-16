import type { ModelViewerElement } from "@google/model-viewer";
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": DetailedHTMLProps<
                HTMLAttributes<ModelViewerElement>,
                ModelViewerElement
            > & {
                src?: string;
                alt?: string;
                "camera-controls"?: boolean;
                "auto-rotate"?: boolean;
                "auto-rotate-delay"?: string;
                "rotation-per-second"?: string;
                "interaction-prompt"?: string;
                "shadow-intensity"?: string;
                exposure?: string;
                "environment-image"?: string;
                "camera-orbit"?: string;
                "field-of-view"?: string;
                style?: CSSProperties & { "--poster-color"?: string };
            };
        }
    }
}
