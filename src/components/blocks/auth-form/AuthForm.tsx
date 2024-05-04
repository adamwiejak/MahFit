import * as styled from "./styles";
import * as config from "./config";
import { useRef } from "react";
import SignupForm from "../../shared/forms/signup-form/SignupForm";
import GoogleAuthProvider from "../../shared/auth-providers/GoogleAuthProvider";
import FacebookAuthProvider from "../../shared/auth-providers/FacebookAuthProvider";
import DemoAccountProvider from "../../shared/auth-providers/DemoAccountProvider";
import LoginForm from "../../shared/forms/login-form/LoginForm";
import { Link } from "react-router-dom";
import Button from "../../primitives/Button";
import useTween from "../../../hooks/useTween";
import { CardProps } from "@mui/material";

interface IAutForm extends CardProps {
  task?: "login" | "signup";
}

const AuthForm: React.FC<IAutForm> = (props) => {
  const { task = "login", ...rest } = props;
  const formsRef = useRef<HTMLDivElement>(null);

  const firstRunRef = useRef(true);
  useTween(() => config.swapAuthForm(task, formsRef, firstRunRef), [task]);

  return (
    <styled.Container {...rest} ref={formsRef}>
      <styled.Header variant="h5">A/B</styled.Header>

      <styled.Main>
        <styled.CardBox>
          <LoginForm />
        </styled.CardBox>

        <styled.CardBox>
          <SignupForm />
        </styled.CardBox>
      </styled.Main>

      <Link to={`/auth/${task === "login" ? "signup" : "login"}`}>
        <Button text="" color="warning" variant="outlined" />
      </Link>

      <styled.Footer>
        <GoogleAuthProvider size="small" variant="outlined" />
        <FacebookAuthProvider size="small" variant="outlined" />
        <DemoAccountProvider size="small" variant="outlined" />
      </styled.Footer>
    </styled.Container>
  );
};

export default AuthForm;
