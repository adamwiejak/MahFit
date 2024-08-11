import * as styled from "./.styles";
import { CardProps } from "@mui/material";

interface IWorkoutCard extends CardProps {
  idx: number;
}

const WorkoutCard: React.FC<IWorkoutCard> = (props) => {
  const { idx, ...rest } = props;

  return <styled.WorkoutCard {...rest}>Workout #{idx + 1}</styled.WorkoutCard>;
};

export default WorkoutCard;
