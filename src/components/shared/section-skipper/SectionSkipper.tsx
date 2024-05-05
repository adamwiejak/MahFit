import * as config from "./config";
import * as styled from "./section-skipper.styled";
import Button from "../../UI/button/Button";
import { useState } from "react";

const SectionSkipper = () => {
  const [active, setActive] = useState(0);

  const onClick = (idx: number) => () => {
    setActive(idx);
  };

  return (
    <styled.Container sx={{ flexGrow: 1 }}>
      {config.navButtons.map(({ text }, idx) => (
        // <NavLink to={`/home#${text}`} key={text}>
        //   <Button
        //     text={text}
        //     size="large"
        //     onClick={onClick(idx)}
        //     color={idx === active ? "primary" : "inherit"}
        //     variant={idx === active ? "outlined" : "text"}
        //   />
        // </NavLink>

        <a href={`#${text}`} key={text}>
          <Button
            text={text}
            size="large"
            onClick={onClick(idx)}
            color={idx === active ? "primary" : "inherit"}
            variant={idx === active ? "outlined" : "text"}
          />
        </a>
      ))}
    </styled.Container>
  );
};

export default SectionSkipper;
