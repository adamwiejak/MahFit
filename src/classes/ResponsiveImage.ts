type Image = { src: string; width: number };

export interface ResponsiveImageAsset {
  alt?: string;
  images: Image[];
}

export default class ResponsiveImage {
  alt: string;
  srcSet?: string;
  src: string;

  constructor(imageAsset: ResponsiveImageAsset) {
    this.alt = imageAsset.alt || "";
    this.srcSet = this.#setSrcSet(imageAsset.images);
    this.src = this.#setDefaultSrc(imageAsset.images);
  }

  #setDefaultSrc(images: ResponsiveImageAsset["images"]) {
    const widths = images.map(({ width }) => width);
    const smallestIdx = widths.findIndex((el) => el === Math.min(...widths));
    return images[smallestIdx].src;
  }

  #setSrcSet(images: ResponsiveImageAsset["images"]) {
    const srcSet = images.map(({ src, width }) => `${src} ${width}w`);
    return srcSet.join(", ");
  }
}
