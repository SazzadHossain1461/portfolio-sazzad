import React, { useState } from 'react';
import '../../styles/profilePhoto.css';

const ProfilePhoto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully');
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (error) => {
    console.error('❌ Image failed to load:', error);
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="profile-photo-container">
      <div 
        className={`photo-wrapper ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Photo Frame */}
        <div className="photo-frame">
          {/* Show placeholder while loading or if error */}
          {!imageLoaded && (
            <div className="placeholder-content">
              <div className="placeholder-avatar">📸</div>
              <p>Loading photo...</p>
            </div>
          )}

          {/* Show error state */}
          {imageError && (
            <div className="placeholder-content">
              <div className="placeholder-avatar">👤</div>
              <p>Photo not found</p>
            </div>
          )}
          
          {/* Actual Image */}
          <img 
            src="/images/profile.jpg"
            alt="Sazzad Hossain"
            className={`profile-img ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          <div className="photo-border"></div>
          <div className="photo-glow"></div>
        </div>

        {/* Decorative Elements */}
        <div className="floating-badge top-left">
          <span>Developer</span>
        </div>
        <div className="floating-badge bottom-right">
          <span>Innovator</span>
        </div>

        {/* Animated Background */}
        <div className="photo-bg-animated"></div>
      </div>

      {/* Info Below Photo */}
      <div className="photo-info">
        <h3>Full Stack Developer</h3>
        <p>React • Node.js • ML/AI</p>
      </div>
    </div>
  );
};

export default ProfilePhoto;