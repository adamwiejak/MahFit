import React from "react";

interface IGenderPicker {}

const GenderPicker: React.FC<IGenderPicker> = (props) => {
  const { ...rest } = props;

  return <div>GenderPicker</div>;
};

export default GenderPicker;
