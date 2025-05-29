
import React from 'react';
import './ActivityGraph.css';

const activityData = [
  [60, 25, 55],  // Mon
  [50, 35, 20],  // Tues
  [30, 20, 40],  // Wed
  [45, 25, 35],  // Thurs
  [60, 30, 50],  // Fri
  [30, 20, 25],  // Sat
  [35, 15, 20],  // Sun
];

const dayLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const ActivityGraph = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className="graph-container">
        {activityData.map((bars, index) => (
          <div key={index} className="day-bar-group">
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar color-${i}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <div className="day-label">{dayLabels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
