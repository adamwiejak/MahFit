import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

export const Page = styled(Box)`
  gap: 2rem;
  padding: 1rem;
  height: 100vh;
  display: grid;
  place-content: start;
  grid-template-areas:
    "icons icons"
    "users workouts";
`;

export const IconsContainer = styled(Box)`
  grid-area: icons;
`;

export const FormsContainer = styled(Card)`
  gap: 0.5rem;
  display: grid;
  padding: 0.5em;
  max-height: 100%;
  place-self: start center;
  grid-template-rows: min-content min-content minmax(0, 1fr);
`;
