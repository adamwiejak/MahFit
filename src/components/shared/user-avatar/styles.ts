import { styled } from "@mui/material";
import AvatarMui from "@mui/material/Avatar";

export const Avatar = styled(AvatarMui)`
  transition: ${({ theme: { transitions } }) => transitions.easing.easeInOut};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;
