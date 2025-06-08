import "./Sidebar.css";
import {
  FaThLarge,
  FaExchangeAlt,
  FaCalendarAlt,
  FaClipboard,
  FaChartBar,
  FaComments,
  FaPhoneAlt,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div className="wrapper">
        <div className="general">General</div>
        <ul>
          <li className="dashboard">
            <FaThLarge className="icon" />
            Dashboard
          </li>
          <li className="history">
            <FaExchangeAlt className="icon" />
            History
          </li>
          <li className="calendar">
            <FaCalendarAlt className="icon" />
            Calendar
          </li>
          <li className="appointments">
            <FaClipboard className="icon" />
            Appointments
          </li>
          <li className="statisticts">
            <FaChartBar className="icon" />
            Statistics
          </li>
        </ul>
        <div className="tools">Tools</div>
        <ul>
          <li className="chat">
            <FaComments className="icon" />
            Chat
          </li>
          <li className="support">
            <FaPhoneAlt className="icon" />
            Support
          </li>
        </ul>
        <ul>
          <li className="setting">
            <FaCog className="icon" />
            Setting
          </li>
        </ul>
      </div>
    </>
  );
}
