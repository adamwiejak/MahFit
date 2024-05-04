import { BoxProps } from "@mui/material";
import * as styled from "./image-switcher.styled";
import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import Image from "../image/Image";

export interface IImageSwitcher extends BoxProps {
  value: number;
  images: ResponsiveImageAsset[];
  onChangeImage: (idx: number) => void;
}

const ImageSwitcher: React.FC<IImageSwitcher> = (props) => {
  const { value, images, onChangeImage, ...rest } = props;

  const changeImageHandler = (idx: number) => () => onChangeImage(idx);

  return (
    <styled.Bar {...rest}>
      {images.map((asset, idx) => (
        <styled.ImgBox
          key={idx}
          active={value === idx}
          onClick={changeImageHandler(idx)}
        >
          <Image imageAsset={asset} />
          {/* <styled.Overlay /> */}
        </styled.ImgBox>
      ))}
    </styled.Bar>
  );
};

export default ImageSwitcher;
