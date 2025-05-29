
import React from 'react';
import './HealthStatusCards.css';

const healthData = [
  {
    icon: '🫁',
    title: 'Lungs',
    date: '26 Oct 2021',
    level: 80,
    color: '#ef5b5b',
  },
  {
    icon: '🦷',
    title: 'Teeth',
    date: '26 Oct 2021',
    level: 80,
    color: '#52d6a0',
  },
  {
    icon: '🦴',
    title: 'Bone',
    date: '26 Oct 2021',
    level: 80,
    color: '#ef5b5b',
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-icon">{item.icon}</div>
          <div className="card-info">
            <h4>{item.title}</h4>
            <p>{`Date: ${item.date}`}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${item.level}%`, backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
