import * as styled from "./styles";
import { useContext } from "react";
import Icon from "../../../UI/Icon";
import { getUserSlice } from "../../../../store";
import Calendar from "../../../blocks/calendar/Calendar";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import FilterFriendsContext from "../../../../context/friends-filter";
import { workoutsMockup } from "../../../../helpers/data/mockups";

const CalendarView = () => {
  const { userData } = getUserSlice();
  const { state } = useContext(FilterFriendsContext);
  const events = [...(userData?.details?.workouts || []), ...state.workouts];

  return (
    <styled.View>
      <Calendar events={events} />

      <SpeedDial
        icon={<Icon icon="add" />}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {workoutsMockup.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={<Icon icon={action.icon} />}
          />
        ))}
      </SpeedDial>
    </styled.View>
  );
};

export default CalendarView;
