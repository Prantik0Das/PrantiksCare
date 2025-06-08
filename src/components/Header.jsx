import "./Header.css";
import { FaSearch, FaBell } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <span className="first-half">Prantik's </span>
          <span className="second-half">care.</span>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <FaSearch className="search-icon"></FaSearch>
            <input type="text" placeholder="Search" />
          </div>
          <FaBell className="bell-icon" />
        </div>
        <div className="profile">
          <img src={profileImage} alt="My Image" className="profile-image" />
        </div>
        <div className="add-profile">
          <div className="plus">+</div>
        </div>
      </div>
    </>
  );
}
