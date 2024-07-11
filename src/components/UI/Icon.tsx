import React from "react";
import { Box, type SvgIconProps } from "@mui/material";
import { iconsAsset } from "../../assets/icons/iconsAsset";
import { Lift } from "../../API/User";

export type IconName = keyof typeof iconsAsset;

export interface IIcon extends SvgIconProps {
  icon: IconName | Lift;
}

const Icon: React.FC<IIcon> = (props) => {
  const { icon, ...rest } = props;
  const I = iconsAsset[icon];

  return (
    <Box sx={{ display: "grid" }}>
      <I {...rest} />
    </Box>
  );
};

export default Icon;
