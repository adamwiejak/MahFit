import WorkoutCard from "../../shared/workout-card/WorkoutCard";
import * as styled from "./.styles";

const WorkoutsView = () => {
  return (
    <styled.View>
      {new Array(40).fill(1).map((_, idx) => (
        <WorkoutCard key={idx} idx={idx}>
          Workout #{idx + 1}
        </WorkoutCard>
      ))}
    </styled.View>
  );
};

export default WorkoutsView;
