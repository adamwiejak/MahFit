import React from "react";
import Icon from "./Icon";
import Tooltip from "@mui/material/Tooltip";
import MUIIconButton from "@mui/material/IconButton";
import type { IconButtonProps as MUIIconButtonProps } from "@mui/material";
import type { IconProps } from "./Icon";

interface IconButtonProps extends MUIIconButtonProps {
  tip?: string;
  icon: IconProps["icon"];
  iconColor?: IconProps["color"];
  iconSize?: IconProps["fontSize"];
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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
