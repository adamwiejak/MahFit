import * as config from "./config";
import * as styled from "./image.styled";
import { useRef, useState } from "react";
import ResponsiveImage from "../../../classes/ResponsiveImage";
import type { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import { BoxProps } from "@mui/material";
import useTween from "../../../hooks/useTween";
import Spinner from "../spinner/Spinner";

export interface IImage extends BoxProps, styled.StyledProps {
  imageAsset: ResponsiveImageAsset;
}

const Image: React.FC<IImage> = (props) => {
  const { imageAsset, ...rest } = props;
  const [finalSize, setFinalSize] = useState("");
  const containerRef = useRef<HTMLDivElement>(null!);

  const image = new ResponsiveImage(imageAsset);
  const tlRef = useTween(() => config.showImageTween(containerRef));

  function setSize() {
    const imgSize = `${containerRef.current.clientWidth}px`;
    setFinalSize(imgSize);
  }

  function onImgLoad() {
    tlRef.current?.play();
  }

  return (
    <styled.Container ref={containerRef} {...rest} component="picture">
      <img loading="lazy" role="placeholder" onLoad={setSize} src={image.src} />
      <Spinner open={!finalSize} />

      {finalSize && <img sizes={finalSize} onLoad={onImgLoad} {...image} />}
      <styled.Overlay />
    </styled.Container>
  );
};
export default Image;
