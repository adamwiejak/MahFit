import * as styled from "./styles";
import Icon from "../../UI/Icon";
import { BoxProps, Typography } from "@mui/material";
import { Lift } from "../../../API/User";

interface ILiftRecord extends BoxProps {
  type: Lift;
  value: number;
}

const LiftRecord: React.FC<ILiftRecord> = (props) => {
  const { type, value, ...rest } = props;

  return (
    <styled.Container {...rest}>
      <Icon icon={type} />
      <Typography>{value}</Typography>
    </styled.Container>
  );
};

export default LiftRecord;
