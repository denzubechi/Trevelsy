import React from "react";
import { FaBookmark, FaSearch, FaAngleDown } from "react-icons/fa";

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
          <li className="navigation-item">
            <a href="" className="navigation-link">
              Company Location
            </a>
          </li>
          <li className="navigation-item">
            <a href="" className="navigation-link">
              Activities
            </a>
          </li>
          <li className="navigation-item">
            <a href="" className="navigation-link">
              Equipments
            </a>
          </li>
          <li className="navigation-item">
            <a href="" className="navigation-link">
              Blogs
            </a>
          </li>
        </ul>
        <div className="navigation-profile-container">
          <div className="reservation-ctn">
            <FaBookmark />
            <div className="reservation-text">Reservations</div>
          </div>
          <div className="search-ctn">
            <FaSearch />
          </div>
          <div className="profile-picture-wrapper">
            <div className="active"></div>
            <img src="./images/Oval.png" alt="" />
          </div>
          <div className="dropdown">
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};
