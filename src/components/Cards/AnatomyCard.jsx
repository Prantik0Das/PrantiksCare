import "./AnatomyCard.css";

function getColorByValue(value) {
  const percent = (value - 1) / 9;
  const r = Math.round(255 * percent);
  const g = Math.round(255 * (1 - percent));
  return `rgb(${r}, ${g}, 0)`;
}

export default function AnatomyCard({ icon, title, date, bar }) {
  const BarColor = getColorByValue(bar);
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card">
      <div className="k">
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
      </div>
      <div className="l">
        <div className="card-date">{formattedDate}</div>
        <div className="status-bar-container">
          <div
            className="status-bar"
            style={{
              width: `${(bar / 10) * 100}%`,
              backgroundColor: BarColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
