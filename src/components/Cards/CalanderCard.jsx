import "./CalanderCard.css";

export default function Schedule({ title, icon, time1, time2, dr_name }) {
  const formatTme = (hour) => {
    const h = Math.floor(hour);
    const m = Math.round((hour - h) * 60);
    const period = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 === 0 ? 12 : h % 12;
    const formattedMinute = m.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div className="whole1">
      <div className="imp1">
        <div>{title}</div>
        <div>{icon} </div>
      </div>
      <div className="time9">
        {formatTme(time1)}-{formatTme(time2)}
      </div>
      <div className="dr_name">{dr_name}</div>
    </div>
  );
}
