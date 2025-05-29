
import React from 'react';
import './ScheduleSection.css';

const schedule = [
  {
    day: 'On Thursday',
    events: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'On Saturday',
    events: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <div className="schedule-section-container">
      <h3 className="section-title">The Upcoming Schedule</h3>
      {schedule.map((day, index) => (
        <div key={index} className="schedule-day">
          <p className="day-label">{day.day}</p>
          <div className="event-grid">
            {day.events.map((event, idx) => (
              <div key={idx} className="event-card">
                <div className="event-title">
                  {event.title} <span className="event-icon">{event.icon}</span>
                </div>
                <div className="event-time">{event.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleSection;
