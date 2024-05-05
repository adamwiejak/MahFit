import * as styled from "./images-slides-switcher.styled";
import Image from "../../image/Image";

const ImagesSlidesSwitcher: React.FC<ISlidesSwitcher> = (props) => {
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

export default ImagesSlidesSwitcher;
