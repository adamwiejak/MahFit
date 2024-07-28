import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import type { WorkoutData } from "../../../API/User";
import Workout from "../../../classes/Workout";

interface ICalendar {
  events?: WorkoutData[];
}

const Calendar: React.FC<ICalendar> = (props) => {
  const { events = [], ...rest } = props;

  return (
    <FullCalendar
      {...rest}
      firstDay={1}
      events={events.map((e) => new Workout(e))}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "title",
        center: "",
        right: "prev,dayGridMonth,dayGridWeek,dayGridDay,next, today",
      }}
    />
  );
};

export default Calendar;
