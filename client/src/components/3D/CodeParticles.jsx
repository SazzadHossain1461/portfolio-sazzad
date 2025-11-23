import React from 'react';
import '../../styles/3d.css';

const CodeParticles = () => {
  return (
    <div className="particles-background">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            '--delay': Math.random() * 3 + 's',
            '--duration': (Math.random() * 8 + 15) + 's'
          }}
        />
      ))}
    </div>
  );
};

export default CodeParticles;