import * as styled from "./styles";
import Calendar from "../../../blocks/calendar/Calendar";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Icon, { IconName } from "../../../UI/Icon";

const actions: { name: string; icon: IconName }[] = [
  { name: "Cardio", icon: "cardio" },
  { name: "Bench Press", icon: "benchPress" },
  { name: "Squat", icon: "squat" },
  { name: "Dead Lift", icon: "deadLift" },
];

const HomeView = () => {
  return (
    <styled.Page>
      <Calendar />

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Icon icon="add" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={<Icon icon={action.icon} />}
          />
        ))}
      </SpeedDial>
    </styled.Page>
  );
};

export default HomeView;
