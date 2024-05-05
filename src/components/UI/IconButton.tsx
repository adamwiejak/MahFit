import React from "react";
import Icon from "./Icon";
import Tooltip from "@mui/material/Tooltip";
import MUIIconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material";
import type { IIcon } from "./Icon";

export interface IIconButton extends IconButtonProps {
  tip?: string;
  icon: IIcon["icon"];
  iconColor?: IIcon["color"];
  iconSize?: IIcon["fontSize"];
}

const IconButton = React.forwardRef<HTMLButtonElement, IIconButton>(
  (props, ref) => {
    const { tip, icon, iconSize, size, ...rest } = props;

    return (
      <Tooltip title={tip} enterDelay={350} enterNextDelay={320} arrow>
        <MUIIconButton ref={ref} size={size} {...rest}>
          <Icon icon={icon} fontSize={iconSize || size} />
        </MUIIconButton>
      </Tooltip>
    );
  }
);

export default IconButton;
