import "./Calendar.css";

export default function Calendar({ day, date, times = [] }) {
  return (
    <div className="calendar-card">
      <div className="calender-header">
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
      <div className="time-slots">
        {times.map((time, index) => (
          <div key={index} className="time-slot">
            {time}
          </div>
        ))}
      </div>
    </div>
  );
}
