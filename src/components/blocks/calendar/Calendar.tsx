import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import type { WorkoutData } from "../../../API/User";
import Workout from "../../../classes/Workout";
import { useMemo } from "react";

interface ICalendar {
  events?: WorkoutData[];
}

const Calendar: React.FC<ICalendar> = (props) => {
  const { events = [], ...rest } = props;

  const workouts = useMemo(() => events.map((e) => new Workout(e)), [events]);

  return (
    <FullCalendar
      {...rest}
      firstDay={1}
      events={workouts}
      stickyHeaderDates
      plugins={[dayGridPlugin]}
      initialView="dayGridWeek"
      headerToolbar={{
        left: "title",
        center: "",
        right: "prev,dayGridMonth,dayGridWeek,dayGridDay,next, today",
      }}
    />
  );
};

export default Calendar;
