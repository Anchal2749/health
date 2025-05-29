

import React from 'react';
import './CalendarSection.css';

const CalendarSection = () => {
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = [
    ['10:00', '08:00', '12:00', '10:00', '14:00', '12:00', '09:00'],
    ['11:00', '09:00', '13:00', '11:00', '16:00', '14:00', '10:00'],
    ['12:00', '10:00', '', '', '', '15:00', '11:00']
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="calendar-actions">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="avatar" className="avatar" />
          <button className="plus-btn">+</button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekdays.map((day, idx) => (
          <div key={idx} className="calendar-column">
            <span className="day-label">{day}</span>
            <span className={`date-label ${day === 'Tues' ? 'active' : ''}`}>{dates[idx]}</span>
            {timeSlots.map((slotRow, rowIdx) => (
              <div
                key={rowIdx}
                className={`time-slot ${day === 'Tues' && rowIdx === 1 ? 'highlight' : ''}`}
              >
                {slotRow[idx]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card blue">
          <div className="title">Dentist</div>
          <div className="time">09:00-11:00</div>
          <div className="doctor">Dr. Cameron Williamson</div>
          <div className="icon">🦷</div>
        </div>
        <div className="appointment-card light-purple">
          <div className="title">Physiotherapy Appointment</div>
          <div className="time">11:00-12:00</div>
          <div className="doctor">Dr. Kevin Djones</div>
          <div className="icon">💪</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
