import React from 'react';
import '../../styles/3d.css';

const ParticleBackground = () => {
  return (
    <div className="particles-background">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            '--delay': Math.random() * 5 + 's',
            '--duration': (Math.random() * 10 + 20) + 's'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;