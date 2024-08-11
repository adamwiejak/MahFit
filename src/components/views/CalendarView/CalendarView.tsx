import * as styled from "./.styles";
import { useContext } from "react";
import Icon from "../../UI/Icon";
import { getUserSlice } from "../../../store";
import Calendar from "../../blocks/calendar/Calendar";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import FilterFriendsContext from "../../../context/friends-filter";
import { workoutsMockup } from "../../../helpers/data/mockups";
import IconButton from "../../UI/IconButton";
import Select from "../../UI/Select";
import Workout from "../../../classes/Workout";

const CalendarView = () => {
  const { userData } = getUserSlice();
  const { state } = useContext(FilterFriendsContext);

  const events = [...(userData?.details?.workouts || []), ...state.workouts].map((e) => new Workout(e));

  return (
    <styled.View>
      <styled.SortBar>
        <Select label="teams" size="small" options={{ team: "team" }} placeholder="Teams" />

        <IconButton icon="group" />
        <IconButton icon="show" />
        <IconButton icon="friends" />
      </styled.SortBar>

      <styled.Content>
        <Calendar events={events} />
      </styled.Content>

      <SpeedDial
        icon={<Icon icon="add" />}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {workoutsMockup.map((action) => (
          <SpeedDialAction key={action.name} tooltipTitle={action.name} icon={<Icon icon={action.icon} />} />
        ))}
      </SpeedDial>
    </styled.View>
  );
};

export default CalendarView;
