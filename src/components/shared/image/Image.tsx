import * as config from "./config";
import * as styled from "./.styles";
import { useMemo, useRef, useState } from "react";
import { BoxProps } from "@mui/material";

export interface IImage extends BoxProps {
  imageAsset: ResponsiveImageAsset;
}

const Image: React.FC<IImage> = (props) => {
  const { imageAsset, ...rest } = props;
  const [size, setSize] = useState("");
  const containerRef = useRef<HTMLDivElement>(null!);

  const srcSet = useMemo(() => imageAsset.images.map(({ src, width }) => `${src} ${width}w`).join(", "), [imageAsset]);

  /*the lowest guality img for temporary, blured placeholder */
  function getDefaultSrc() {
    const widths = imageAsset.images.map(({ width }) => width);
    const smallestIdx = widths.findIndex((el) => el === Math.min(...widths));
    return imageAsset.images[smallestIdx].src;
  }

  function setFinalSize() {
    setSize(`${containerRef.current.clientWidth}px`);
  }

  function onFinalImageLoad() {
    config.rmeoveOverlayTween(containerRef);
  }

  return (
    <styled.Container ref={containerRef} {...rest} component="picture">
      <img loading="lazy" onLoad={setFinalSize} src={getDefaultSrc()} />
      {size && <img sizes={size} srcSet={srcSet} onLoad={onFinalImageLoad} />}
      <styled.Overlay />
    </styled.Container>
  );
};
export default Image;
