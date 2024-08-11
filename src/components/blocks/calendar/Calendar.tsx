import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Workout from "../../../classes/Workout";

interface ICalendar {
  events?: Workout[];
}

const Calendar: React.FC<ICalendar> = (props) => {
  const { events = [], ...rest } = props;

  return (
    <FullCalendar
      {...rest}
      firstDay={1}
      events={events}
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
