import * as config from "./config";
import * as styled from "./dots-slides-switcher.styled";
import useTween from "../../../../hooks/useTween";
import { useRef } from "react";

const DotsSlidesSwitcher: React.FC<ISlidesSwitcher> = (props) => {
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

export default DotsSlidesSwitcher;
