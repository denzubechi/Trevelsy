import React from "react";
import ProfilePicture from "../../assets/images/Oval.png";
import { NAV_LINKS } from "../../lib/constants/links";
export const SideBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <input type="checkbox" name="" className="checkbox" id="click" hidden />
      <div className="side-bar">
        <label htmlFor="click">
          <div className="menu-icon">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </label>
      </div>

      <div className="navigation">
        <ul className="navigation-list">
          {NAV_LINKS.map((item, index) => (
            <li key={index} className="navigation-item">
              <a href={item.path} className="navigation-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navigation-profile-container">
          <div className="reservation-ctn">
            <i className="fas fa-search"></i>
            <div className="reservation-text">Reservations</div>
          </div>
          <div className="search-ctn">
            <i className="fas fa-search"></i>
          </div>
          <div className="profile-picture-wrapper">
            <div className="active"></div>
            <img src={ProfilePicture} alt="Profile" />
          </div>
          <div className="dropdown">
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
