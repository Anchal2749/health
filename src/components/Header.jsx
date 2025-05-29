
import React from 'react';
import './Header.css';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="bell-icon">
          <FaBell />
           
        </div>
        
      </div>

      <div className="header-bottom">
        <h2>Dashboard</h2>
        <span className="this-week">This Week ▾</span>
      </div>
    </div>
  );
};

export default Header;
