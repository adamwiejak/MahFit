import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  position: relative;
  display: grid;
  place-items: center;
  align-self: end;
  min-height: 45vh;
  background-color: black;
  margin-top: auto;
  color: ${({ theme: { palette } }) => palette.getContrastText("#010101cc")};
`;
