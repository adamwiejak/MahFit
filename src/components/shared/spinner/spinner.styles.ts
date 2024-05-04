import { styled } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Overlay = styled(Box)`
  inset: 0;
  position: absolute;
  display: grid;
  place-items: center;
  backdrop-filter: blur(15px);
`;

export const Spinner = styled(CircularProgress)`
  display: grid;
  place-items: center;
`;

Spinner.defaultProps = { size: "5%" };
