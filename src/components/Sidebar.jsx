import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaComments, FaPhone, FaCog } from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt />, active: true },
  { label: 'History', icon: <FaHistory /> },
  { label: 'Calendar', icon: <FaCalendarAlt /> },
  { label: 'Appointments', icon: <FaStethoscope /> },
  { label: 'Statistics', icon: <FaChartBar /> },
];

const toolItems = [
  { label: 'Chat', icon: <FaComments /> },
  { label: 'Support', icon: <FaPhone /> },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1><span className="text-accent">Health</span>care.</h1>
      </div>
      <nav className="sidebar-section">
        <p className="section-title">General</p>
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            {item.icon}<span>{item.label}</span>
          </div>
        ))}
      </nav>
      <nav className="sidebar-section">
        <p className="section-title">Tools</p>
        {toolItems.map((item, idx) => (
          <div key={idx} className="nav-item">
            {item.icon}<span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="nav-item">
          <FaCog /><span>Setting</span>
        </div>
      </div>
    </aside>
  );
}
