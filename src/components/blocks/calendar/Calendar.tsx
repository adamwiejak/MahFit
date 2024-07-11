import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const DUMMY_EVENTS = [
  { title: "event 1", date: "2024-06-28" },
  { title: "event 2", date: "2024-06-30" },
];

const Calendar = () => {
  return (
    <FullCalendar
      events={DUMMY_EVENTS}
      initialView="dayGridMonth"
      plugins={[dayGridPlugin]}
      headerToolbar={{
        left: "today",
        center: "title",
        right: "prev,dayGridMonth,dayGridWeek,dayGridDay,next",
      }}
    />
  );
};

export default Calendar;
