declare module "bwip-js" {
  interface ToCanvasOptions {
    bcid: string; // Barcode type
    text: string; // Text to encode
    scale?: number; // Scaling factor
    height?: number; // Bar height
    includetext?: boolean; // Show human-readable text
    textxalign?: "left" | "center" | "right";
    rotate?: "N" | "R" | "L" | "I";
    [key: string]: any; // Allow for other specific bwip-js options
  }

  export function toCanvas(
    canvas: string | HTMLCanvasElement,
    options: ToCanvasOptions,
  ): void;

  // Add other methods if you plan to use them (e.g., toBuffer, toImageData)
}
