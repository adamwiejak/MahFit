import * as styled from "./image-slider.styled";
import * as config from "./config";
import React, { useEffect, useRef, useState } from "react";
import type { BoxProps } from "@mui/material/Box";
import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import useTween from "../../../hooks/useTween";
import ImageSwitcher from "../../shared/image-switcher/ImageSwitcher";
import DotImageSwitcher from "../../shared/dot-image-switcher/DotImageSwitcher";

interface IImageSlider extends BoxProps {
  delay?: number;
  switcher?: boolean;
  imagesAssets: ResponsiveImageAsset[];
}

const ImageSlider: React.FC<IImageSlider> = (props) => {
  const { imagesAssets, switcher, delay = 7000, ...rest } = props;
  const imageContainerRef = useRef();
  const [currImg, setCurrImg] = useState(0);

  useTween(() => config.swapImage(imageContainerRef, currImg), [currImg]);

  const goToImage = (to: number) => {
    if (to < 0) to = imagesAssets.length - 1;
    if (to > imagesAssets.length - 1) to = 0;
    setCurrImg(to);
  };

  useEffect(() => {
    const timer = setInterval(() => goToImage(currImg + 1), delay);
    return () => clearInterval(timer);
  }, [currImg]);

  return (
    <>
      <styled.Container {...rest}>
        <styled.Arrow
          icon="arrowLeft"
          sx={{ left: 0 }}
          onClick={() => goToImage(currImg - 1)}
        />

        <styled.ImageBox ref={imageContainerRef}>
          {imagesAssets.map((asset, idx) => (
            <styled.Img
              key={idx}
              imagePosition=""
              imageAsset={asset}
              onClick={() => goToImage(idx)}
            />
          ))}
        </styled.ImageBox>

        <styled.Arrow
          icon="arrowRight"
          sx={{ right: 0 }}
          onClick={() => goToImage(currImg + 1)}
        />
      </styled.Container>

      {/* 
      {switcher && (
        <ImageSwitcher
          value={currImg}
          images={imagesAssets}
          onChangeImage={(idx: number) => setCurrImg(idx)}
        />
      )} */}

      {switcher && (
        <DotImageSwitcher
          value={currImg}
          images={imagesAssets}
          onChangeImage={(idx: number) => setCurrImg(idx)}
        />
      )}
    </>
  );
};

export default ImageSlider;
