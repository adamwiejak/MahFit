import * as config from "./config";
import * as styled from "./section-skipper.styled";
import Button from "../../UI/button/Button";
import { useState } from "react";
import { BoxProps } from "@mui/material";

const SectionSkipper: React.FC<BoxProps> = (props) => {
  const [active, setActive] = useState(0);

  const onClick = (idx: number) => () => {
    setActive(idx);
  };

  return (
    <styled.Container {...props}>
      {config.navButtons.map(({ text }, idx) => (
        <a href={`#${text}`} key={text}>
          <Button
            text={text}
            size="large"
            onClick={onClick(idx)}
            color={idx === active ? "secondary" : "inherit"}
            variant={idx === active ? "outlined" : "text"}
          />
        </a>
      ))}
    </styled.Container>
  );
};

export default SectionSkipper;
