import styled from "@mui/material/styles/styled";
import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = styled(CircularProgress)`
  display: grid;
  place-self: center;
  place-items: center;
  margin: ${({ theme: { spacing } }) => spacing(4)};
`;

Spinner.defaultProps = { color: "secondary", size: "7vh" };
