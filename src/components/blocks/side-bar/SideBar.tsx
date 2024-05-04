import * as styled from "./styles";
import * as config from "./config";
import { useRef } from "react";
import Logo from "../../shared/logo/Logo";
import { Divider, Typography } from "@mui/material";
import SignupForm from "../../shared/forms/signup-form/SignupForm";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import { Link } from "react-router-dom";
import GoogleAuthProvider from "../../shared/auth-providers/GoogleAuthProvider";
import FacebookAuthProvider from "../../shared/auth-providers/FacebookAuthProvider";
import DemoAccountProvider from "../../shared/auth-providers/DemoAccountProvider";
import IconButton from "../../primitives/IconButton";
import Button from "../../primitives/Button";
import useTween from "../../../hooks/useTween";

const SideBar: React.FC<config.SideBarProps> = (props) => {
  const barRef = useRef<HTMLDivElement>(null);
  useTween(() => config.openSideBar(barRef));

  return (
    <styled.Container {...props} ref={barRef}>
      <styled.Header>
        <ThemeSwitcher />
        <Logo />
        <IconButton icon="arrowLeft" color="secondary" />
      </styled.Header>

      <Divider />

      <styled.Main>
        <Typography variant="h4">Start Your Journey Now...</Typography>
        <Typography sx={{ mb: 4 }} variant="body1">
          Create Your Free Account
        </Typography>

        <SignupForm />

        <Link to="/auth/login">
          <Button
            size="small"
            variant="text"
            color="secondary"
            text="I Have Account Already"
          />
        </Link>
      </styled.Main>

      <Divider />

      <styled.Footer>
        <GoogleAuthProvider />
        <FacebookAuthProvider />
        <DemoAccountProvider variant="text" text="Try Local Demo Account" />
      </styled.Footer>
    </styled.Container>
  );
};

export default SideBar;
