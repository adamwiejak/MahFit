import styled from "./styles";
import { ButtonProps } from "@mui/material/Button";
import type { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import Image from "../image/Image";

interface ButtonImageProps extends ButtonProps {
  text: string;
  imageAsset: ResponsiveImageAsset;
}

const ButtonImage: React.FC<ButtonImageProps> = (props) => {
  const { text, imageAsset, ...rest } = props;
  return (
    <styled.Container {...rest}>
      <Image imageAsset={imageAsset} sx={{ position: "absolute" }} />
      <styled.Text> {text}</styled.Text>
    </styled.Container>
  );
};

export default ButtonImage;
