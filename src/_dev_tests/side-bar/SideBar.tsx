import * as styled from "./styles";
import * as config from "./config";
import { useRef } from "react";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useTween from "../../hooks/useTween";
import ThemeSwitcher from "../../components/shared/theme-switcher/ThemeSwitcher";
import Logo from "../../components/shared/logo/Logo";
import IconButton from "../../components/UI/IconButton";
import SignupForm from "../../components/shared/forms/signup-form/SignupForm";
import Button from "../../components/UI/button/Button";
import GoogleAuthProvider from "../../components/shared/auth-providers/GoogleAuthProvider";
import FacebookAuthProvider from "../../components/shared/auth-providers/FacebookAuthProvider";
import DemoAccountProvider from "../../components/shared/auth-providers/DemoAccountProvider";

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
