import Schedule from "../Cards/Schedule.jsx";
import "./UpcomingSchedule.css";
import { FaDiagnoses, FaEye, FaHeartBroken, FaBrain } from "react-icons/fa";
export default function UpcomingSchedule() {
  return (
    <div className="box">
      <h2 className="title">The Upcoming Schedule</h2>
      <div className="day">On Thrusday</div>
      <div className="row">
        <Schedule title="Eye Check up" icon={<FaEye />} time={11}></Schedule>
        <Schedule
          title="Health Check up"
          icon={<FaDiagnoses />}
          time={17}
        ></Schedule>
      </div>
      <div className="day">On Saturday</div>
      <div className="row">
        <Schedule
          title="Cardiologist"
          icon={<FaHeartBroken />}
          time={18.5}
        ></Schedule>
        <Schedule title="Neurologist" icon={<FaBrain />} time={16.5}></Schedule>
      </div>
    </div>
  );
}
