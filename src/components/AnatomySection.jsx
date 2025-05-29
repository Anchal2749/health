import React from 'react';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy">
      <img src="/anatomy.png" alt="anatomy" />
      <div className="tag heart">❤️ Healthy Heart</div>
      <div className="tag leg">🦵 Healthy Leg</div>
    </div>
  );
};

export default AnatomySection;
