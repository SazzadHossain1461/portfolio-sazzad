import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                <div className="experience-meta">
                  <span className="badge">{exp.duration_months} months</span>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;