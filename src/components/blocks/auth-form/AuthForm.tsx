import * as styled from "./.styles";
import * as config from "./config";
import { useRef } from "react";
import SignupForm from "../../shared/forms/signup-form/SignupForm";
import GoogleAuthProvider from "../../shared/auth-providers/GoogleAuthProvider";
import DemoAccountProvider from "../../shared/auth-providers/DemoAccountProvider";
import LoginForm from "../../shared/forms/login-form/LoginForm";
import { Link } from "react-router-dom";
import Button from "../../UI/button/Button";
import useTween from "../../../hooks/useTween";
import { CardProps } from "@mui/material";
import { getUserSlice } from "../../../store";
import Spinner from "../../shared/spinner/Spinner";
import FacebookAuthProvider from "../../shared/auth-providers/FacebookAuthProvider";

interface IAutForm extends CardProps {
  task?: "login" | "signup";
}

const AuthForm: React.FC<IAutForm> = (props) => {
  const { task = "login", ...rest } = props;
  const { accessToken } = getUserSlice();

  const firstRunRef = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useTween(() => config.swapAuthForm(task, containerRef, firstRunRef), [task]);

  const inProgress = accessToken === undefined;

  return (
    <styled.Container {...rest} ref={containerRef}>
      <styled.Header variant="h5">A/B</styled.Header>

      <styled.Main>
        <styled.CardBox>
          <LoginForm elevation={10} />
        </styled.CardBox>
        <styled.CardBox>
          <SignupForm elevation={10} />
        </styled.CardBox>
        <Spinner open={accessToken === undefined} />
      </styled.Main>

      <Link to={`/auth/${task === "login" ? "signup" : "login"}`}>
        <Button text="" size="small" variant="text" disabled={inProgress} sx={{ color: "warning.dark" }} />
      </Link>

      <styled.Footer>
        <FacebookAuthProvider disabled={inProgress} size="small" />

        <GoogleAuthProvider size="small" disabled={inProgress} />

        <DemoAccountProvider disabled={inProgress} color="success" size="small" />
      </styled.Footer>
    </styled.Container>
  );
};

export default AuthForm;
