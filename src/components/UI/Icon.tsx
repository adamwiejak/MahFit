import React from "react";
import type { SvgIconProps } from "@mui/material";
import { iconsAsset } from "../../assets/icons/iconsAsset";

export interface IIcon extends SvgIconProps {
  icon: keyof typeof iconsAsset;
}

const Icon: React.FC<IIcon> = (props) => {
  const { icon, ...rest } = props;
  const I = iconsAsset[icon];

  return <I {...rest} />;
};

export default Icon;
