import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/Oval.png";
import { NAV_LINKS } from "../../lib/constants/links";

export const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="icon-container">
        <Link to="/" className="icon-text">
          Travelsy
        </Link>
      </div>
      <div className="nav-container">
        <ul className="nav-wrapper">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="nav-items">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="profile-container">
          <div className="reservation-ctn">
            <i className="far fa-bookmark"></i>
            <div className="reservation-text">Reservations</div>
          </div>
          <div className="search-ctn">
            <i className="fas fa-search"></i>
          </div>
          <div className="profile-picture-wrapper">
            <div className="active"></div>
            <img src={profileImage} alt="profile" />
          </div>
          <div className="dropdown">
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};
