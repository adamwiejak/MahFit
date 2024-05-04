import { useRef } from "react";
import styled, { StyledProps } from "./scroll-up.styled";
import * as config from "./config";
import Icon from "../../../components/primitives/Icon";
import { scrollIntoView } from "../../../helpers/functions/functions";
import useTween from "../../../hooks/useTween";

interface IScrollUp extends StyledProps {
  enterOffset?: number; //Fraction 0-1
}

const ScrollUp: React.FC<IScrollUp> = (props) => {
  const { enterOffset, ...rest } = props;

  const btnRef = useRef<HTMLButtonElement>(null);
  useTween(() => config.toggleButtonTween(btnRef, enterOffset));

  return (
    <styled.ScrollBtn
      {...rest}
      ref={btnRef}
      color="secondary"
      onClick={() => scrollIntoView(window, 0)}
    >
      <Icon icon="arrowsUp" />
    </styled.ScrollBtn>
  );
};

export default ScrollUp;
