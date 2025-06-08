import CalanderCards from "../Cards/CalanderCard.jsx";
import { FaTeeth, FaBrain, FaGreaterThan, FaLessThan } from "react-icons/fa";
import "./CalendarView.css";
import Calendar from "../Cards/Calendar.jsx";
import { useState } from "react";

const getWeekData = (startDate) => {
  const week = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(startDate);
    dayDate.setDate(startDate.getDate() + i);

    const day = dayDate.toLocaleDateString("en-US", { weekday: "short" });
    const date = dayDate.getDate();
    const month = dayDate.toLocaleDateString("en-US", { month: "short" });
    const year = dayDate.getFullYear();

    const time = [];
    const baseHour = 8 + (i % 3);
    for (let j = 0; j < 3; j++) {
      const hour = (baseHour + j).toString().padStart(2, "0");
      time.push(`${hour}:00`);
    }

    week.push({ day, date, times: time, month, year });
  }

  return week;
};

export default function CalendarView() {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const weekDate = getWeekData(startDate);

  const handlePrevWeek = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 7);
    setStartDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 7);
    setStartDate(newDate);
  };

  let rangeLabel = "";
  if (weekDate.length > 0) {
    const startMonth = weekDate[0].month;
    const startYear = weekDate[0].year;
    const endMonth = weekDate[6].month;
    const endYear = weekDate[6].year;
    rangeLabel =
      startMonth === endMonth && startYear === endYear
        ? `${startMonth} ${startYear}`
        : `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }
  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{rangeLabel}</h2>
          <div className="arrows">
            <button onClick={handlePrevWeek}>
              <FaLessThan />
            </button>
            <button onClick={handleNextWeek}>
              <FaGreaterThan />
            </button>
          </div>
        </div>

        <div className="calendar-row">
          {weekDate.map((entry, index) => (
            <Calendar
              key={index}
              day={entry.day}
              date={entry.date}
              times={entry.times}
            />
          ))}
        </div>
      </div>
      <div className="box2">
        <CalanderCards
          title="Dentist"
          icon={<FaTeeth />}
          time1={16}
          time2={17}
          dr_name="Dr William"
        ></CalanderCards>
        <CalanderCards
          title="Physiotherapy"
          icon={<FaBrain />}
          time1={11}
          time2={12}
          dr_name="Dr Djones"
        ></CalanderCards>
      </div>
    </>
  );
}
