import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = ({ data }) => {
  if (!data) return null;

  const skillCategories = [
    { title: 'Frontend', skills: data.frontend, color: '#00d9ff' },
    { title: 'Backend', skills: data.backend, color: '#ff006e' },
    { title: 'ML/AI', skills: data.ml_ai, color: '#ffd60a' },
    { title: 'Databases', skills: data.databases, color: '#06ffa5' },
    { title: 'Tools', skills: data.tools, color: '#b537f2' },
    { title: 'Soft Skills', skills: data.soft_skills, color: '#00f5ff' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 style={{ color: category.color }}>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-name">{skill}</span>
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      style={{
                        backgroundColor: category.color,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;