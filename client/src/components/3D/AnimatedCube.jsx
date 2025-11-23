import React from 'react';
import '../../styles/3d.css';

const AnimatedCube = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face front">REACT</div>
        <div className="cube-face back">NODE</div>
        <div className="cube-face right">3D</div>
        <div className="cube-face left">ML</div>
        <div className="cube-face top">FULL</div>
        <div className="cube-face bottom">STACK</div>
      </div>
    </div>
  );
};

export default AnimatedCube;