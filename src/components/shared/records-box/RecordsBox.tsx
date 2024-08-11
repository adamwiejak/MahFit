import * as styled from "./.styles";
import Icon from "../../UI/Icon";
import { BoxProps, Typography } from "@mui/material";
import { liftsMockup } from "../../../helpers/data/mockups";
import { Records } from "../../../API/User";

interface IRecordsBox extends BoxProps {
  records?: Records;
}

const RecordsBox: React.FC<IRecordsBox> = (props) => {
  const { records, ...rest } = props;

  return (
    <styled.Records {...rest}>
      {liftsMockup.map((lift) => (
        <styled.Record key={lift}>
          <Icon icon={lift} />
          <Typography variant="body2">{69}Kg</Typography>
        </styled.Record>
      ))}
    </styled.Records>
  );
};

export default RecordsBox;
