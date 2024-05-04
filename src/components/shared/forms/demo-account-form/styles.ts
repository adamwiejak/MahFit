import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

const Container = styled(Card)`
  min-width: 50vw;
  position: relative;
  text-align: left;
  padding: ${({ theme: { spacing } }) => spacing(5, 4)};
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;

const Form = styled(Box)`
  display: grid;
  grid-template-rows: 1fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  overflow: hidden;
`;

Form.defaultProps = { component: "form" };

const Inputs = styled(Box)`
  overflow: auto;
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

const Actions = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export default {
  Container,
  Form,
  Inputs,
  Actions,
};
