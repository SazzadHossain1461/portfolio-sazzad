import React, { useState } from 'react';
import '../../styles/character.css';

const AnimatedCharacter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="character-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`character ${isHovered ? 'hovered' : ''}`}>
        {/* Head */}
        <div className="head">
          <div className="face">
            <div className="eye left-eye"></div>
            <div className="eye right-eye"></div>
            <div className="mouth"></div>
          </div>
          <div className="hair"></div>
          <div className="sunglasses">
            <div className="glass left-glass"></div>
            <div className="glass right-glass"></div>
            <div className="glass-bridge"></div>
          </div>
        </div>

        {/* Body */}
        <div className="body">
          <div className="jacket">
            <div className="jacket-left"></div>
            <div className="jacket-right"></div>
            <div className="collar-left"></div>
            <div className="collar-right"></div>
          </div>
          <div className="shirt"></div>
        </div>

        {/* Arms */}
        <div className="arms">
          <div className="arm left-arm"></div>
          <div className="arm right-arm"></div>
        </div>

        {/* Legs */}
        <div className="legs">
          <div className="leg left-leg"></div>
          <div className="leg right-leg"></div>
        </div>

        {/* Glow Effect */}
        <div className="character-glow"></div>
      </div>

      {/* Floating Badge */}
      <div className="badge">
        <span>Full Stack</span>
        <span>Developer</span>
      </div>
    </div>
  );
};

export default AnimatedCharacter;