import "./Schedule.css";

export default function Schedule({ title, icon, time }) {
  const formatTme = (hour) => {
    const h = Math.floor(hour);
    const m = Math.round((hour - h) * 60);
    const period = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 === 0 ? 12 : h % 12;
    const formattedMinute = m.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div className="whole">
      <div className="imp">
        <div>{title}</div>
        <div className="icon">{icon} </div>
      </div>
      <div className="time">{formatTme(time)}</div>
    </div>
  );
}
