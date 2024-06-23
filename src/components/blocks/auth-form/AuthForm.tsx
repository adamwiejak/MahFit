import * as styled from "./styles";
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
import { getGlobalSlice } from "../../../store/Store";
import Spinner from "../../shared/spinner/Spinner";

interface IAutForm extends CardProps {
  task?: "login" | "signup";
}

const AuthForm: React.FC<IAutForm> = (props) => {
  const { task = "login", ...rest } = props;
  const { inProgress } = getGlobalSlice();

  const firstRunRef = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useTween(() => config.swapAuthForm(task, containerRef, firstRunRef), [task]);

  return (
    <styled.Container {...rest} ref={containerRef}>
      <styled.Header variant="h5">A/B</styled.Header>

      <styled.Main>
        <styled.CardBox>
          <LoginForm />
        </styled.CardBox>

        <styled.CardBox>
          <SignupForm />
        </styled.CardBox>

        <Spinner open={inProgress} />
      </styled.Main>

      <Link to={`/auth/${task === "login" ? "signup" : "login"}`}>
        <Button
          text=""
          size="small"
          color="warning"
          variant="outlined"
          disabled={inProgress}
        />
      </Link>

      <styled.Footer>
        <GoogleAuthProvider disabled={inProgress} size="small" />
        <DemoAccountProvider disabled={inProgress} size="small" />
        {/* <FacebookAuthProvider size="small" /> */}
      </styled.Footer>
    </styled.Container>
  );
};

export default AuthForm;
