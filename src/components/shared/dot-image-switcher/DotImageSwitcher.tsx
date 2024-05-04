import * as config from "./config";
import * as styled from "./dot-image-switcher.styled";
import { BoxProps } from "@mui/material";
import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import useTween from "../../../hooks/useTween";
import { useRef } from "react";

export interface IDotImageSwitcher extends BoxProps {
  value: number;
  images: ResponsiveImageAsset[];
  onChangeImage: (idx: number) => void;
}

const DotImageSwitcher: React.FC<IDotImageSwitcher> = (props) => {
  const { value, images, onChangeImage, ...rest } = props;
  const barRef = useRef<HTMLElement>();

  useTween(() => config.dotsTween(barRef, value), [value]);

  function showImage(idx: number) {
    return () => onChangeImage(idx);
  }

  return (
    <styled.Bar {...rest} ref={barRef}>
      {images.map((_, idx) => (
        <styled.Dot key={idx} onClick={showImage(idx)} />
      ))}
    </styled.Bar>
  );
};

export default DotImageSwitcher;
