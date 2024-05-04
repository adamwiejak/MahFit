import React from "react";
import type { IconProps as MUIIconProps } from "@mui/material";
import { IconName, iconsAsset } from "../../assets/icons/iconsAsset";

export interface IconProps extends MUIIconProps {
  icon: IconName;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { icon, ...rest } = props;
  const I: any = iconsAsset[icon];
  return <I ref={ref} {...rest} />;
});

export default Icon;
