import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ data }) => {
  if (!data) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p className="about-summary">{data.summary}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="education">
            <h3>Education</h3>
            <div className="education-list">
              {data.education && data.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="year">{edu.year}</span>
                  </div>
                  <p className="school">{edu.school}</p>
                  <p className="result">Result: {edu.result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;