import * as styled from "./styles.";

const WorkoutsView = () => {
  return (
    <styled.View>
      {new Array(40).fill(1).map((_, idx) => (
        <styled.WorkoutCard>Workout #{idx + 1}</styled.WorkoutCard>
      ))}
    </styled.View>
  );
};

export default WorkoutsView;
