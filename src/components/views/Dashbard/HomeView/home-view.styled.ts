import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Page = styled(Box)`
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr;
  padding: ${({ theme: { spacing } }) => spacing(1)};
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;

const Placeholder = styled(Card)`
  display: grid;
  place-items: center;
`;

export const SideBar = styled(Placeholder)`
  background-color: #0000ff55;
`;

export const Main = styled(Placeholder)`
  background-color: #00ff0055;
`;
