import React from 'react';
import Sidebar from './components/Sidebar';
 import Header from './components/Header';
import AnatomySection from './components/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards';
import CalendarSection from './components/CalendarSection';
import ScheduleSection from './components/ScheduleSection';
 import ActivityGraph from './components/ActivityGraph';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-grid">
          <div className="left-section">
           <div className="sub-left">
           <div className="left"> 
             <AnatomySection /></div>
           <div className="right">
             <HealthStatusCards />
           </div>
           </div>
            <ActivityGraph />
          </div>
          <div className="right-section">
            <CalendarSection />
            <ScheduleSection />
          </div>
        </div>
      </div>
    </div>
  );
}
