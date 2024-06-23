import { styled } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Overlay = styled(Box)`
  inset: 0;
  position: absolute;
  z-index: 9999;
  display: grid;
  place-items: center;
  backdrop-filter: blur(1px) grayscale(1);
`;

export const Spinner = styled(CircularProgress)`
  display: grid;
  place-items: center;
`;

Spinner.defaultProps = { size: "5%" };
