import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import ProfilePhoto from './3D/ProfilePhoto';
import '../styles/Hero.css';

const Hero = ({ data }) => {
  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleDownloadCV = () => {
    const cvPath = '/files/Sazzad-Hossain-CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Sazzad-Hossain-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="greeting">
            <span className="wave">👋</span>
            <p>Welcome to my portfolio</p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">{data.name}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            {data.title}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Full Stack Developer crafting beautiful and functional web experiences.
            Specialized in React, Node.js, and AI/ML integration.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href={`https://linkedin.com/in/${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${data.email}`} className="social-link" title="Email">
              <FaEnvelope />
            </a>
            <a href={`tel:${data.phone}`} className="social-link" title="Phone">
              <FaPhone />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={handleDownloadCV}
              title="Download CV"
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download CV
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleContactScroll}
              title="Get in Touch"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-icon">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;