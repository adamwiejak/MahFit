import * as config from "./config";
import * as styled from "./section-skipper.styled";
import { NavLink, useLocation } from "react-router-dom";
import { compareStrings } from "../../../helpers/functions/functions";
import Button from "../../primitives/Button";

const SectionSkipper = () => {
  const { pathname } = useLocation();

  function isActive(phraze: string) {
    const match = compareStrings(pathname.split("/"), phraze);
    return match;
  }

  return (
    <styled.Container sx={{ flexGrow: 1 }}>
      {config.navButtons.map(({ text }) => (
        <NavLink to={`/home#${text}`} key={text}>
          <Button
            text={text}
            size="large"
            variant="text"
            color={isActive(text) ? "secondary" : "inherit"}
          />
        </NavLink>

        // <a href={`#${text}`} key={text}>
        //   <Button
        //     text={text}
        //     variant="text"
        //     color={isActive(text) ? "secondary" : "inherit"}
        //   />
        // </a>
      ))}
    </styled.Container>
  );
};

export default SectionSkipper;
