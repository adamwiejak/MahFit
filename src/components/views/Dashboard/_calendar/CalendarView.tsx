import * as styled from "./styles";
import Calendar from "../../../blocks/calendar/Calendar";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Icon from "../../../UI/Icon";
import { getUserSlice } from "../../../../store";
import { useContext } from "react";
import FilterFriendsContext from "../../../../context/friends-filter";
import { workoutsMockup } from "../../../../helpers/data/mockups";

const HomeView = () => {
  const { userData } = getUserSlice();
  const { state } = useContext(FilterFriendsContext);
  const events = [...(userData?.details?.workouts || []), ...state.workouts];

  return (
    <styled.Page>
      <Calendar events={events} />

      <SpeedDial
        icon={<Icon icon="add" />}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        {workoutsMockup.map((action) => (
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
