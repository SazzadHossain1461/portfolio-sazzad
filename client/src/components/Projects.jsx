import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode, FaClock } from 'react-icons/fa';
import useGitHubProjects from '../hooks/useGitHubProjects';
import '../styles/Projects.css';

const Projects = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState('all');

  // Fetch GitHub projects
  const { projects: githubProjects, pinnedProjects, loading } = useGitHubProjects('SazzadHossain1461');

  // Get all languages from projects
  const getAllLanguages = () => {
    const languages = new Set();
    pinnedProjects.forEach(p => p.language && languages.add(p.language));
    githubProjects.forEach(p => p.language && languages.add(p.language));
    return Array.from(languages).sort();
  };

  const languages = getAllLanguages();

  // Filter projects by language
  const filterProjectsByLanguage = (projects) => {
    if (activeLanguage === 'all') return projects;
    return projects.filter(p => p.language === activeLanguage);
  };

  const filteredGithubProjects = filterProjectsByLanguage(githubProjects);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* ========== PINNED PROJECTS ========== */}
        {pinnedProjects.length > 0 && (
          <div className="pinned-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              📌 Pinned Projects
            </motion.h3>

            <motion.div
              className="pinned-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pinnedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="pinned-card"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className="pin-icon">📌</div>

                  <div className="pinned-content">
                    <h4>{project.title}</h4>
                    <p className="pinned-description">{project.description}</p>

                    <div className="pinned-meta">
                      <div className="meta-item">
                        <FaCode /> {project.language || 'Unknown'}
                      </div>
                      <div className="meta-item">
                        <FaStar /> {project.stars}
                      </div>
                      <div className="meta-item">
                        <FaCodeBranch /> {project.forks}
                      </div>
                    </div>

                    {project.topics.length > 0 && (
                      <div className="topics">
                        {project.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="topic-tag">{topic}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <motion.div
                    className="pinned-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="pin-link">
                      <FaGithub /> View Code
                    </a>
                    {project.homepage && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="pin-link">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* ========== ALL PROJECTS SECTION ========== */}
        {githubProjects.length > 0 && (
          <div className="all-projects-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🔨 All Projects ({githubProjects.length})
            </motion.h3>

            {/* Language Filter */}
            <motion.div
              className="language-filter"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                className={`filter-btn ${activeLanguage === 'all' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('all')}
              >
                All
              </button>
              {languages.map(lang => (
                <button
                  key={lang}
                  className={`filter-btn ${activeLanguage === lang ? 'active' : ''}`}
                  onClick={() => setActiveLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </motion.div>

            {/* Loading State */}
            {loading && (
              <motion.div className="loading-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="spinner"></div>
                <p>Loading projects...</p>
              </motion.div>
            )}

            {/* Projects List */}
            <motion.div
              className="projects-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredGithubProjects.length > 0 ? (
                filteredGithubProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="project-item"
                    variants={itemVariants}
                    onHoverStart={() => setHoveredId(project.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="project-icon">
                      <FaCode />
                    </div>

                    <div className="project-info">
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>

                      <div className="project-bottom">
                        <div className="project-details">
                          <span className="detail-item">
                            <FaCode /> {project.language || 'N/A'}
                          </span>
                          <span className="detail-item">
                            <FaStar /> {project.stars}
                          </span>
                          <span className="detail-item">
                            <FaCodeBranch /> {project.forks}
                          </span>
                          <span className="detail-item">
                            <FaClock /> {formatDate(project.updated_at)}
                          </span>
                        </div>

                        {project.topics.length > 0 && (
                          <div className="mini-topics">
                            {project.topics.slice(0, 2).map((topic, idx) => (
                              <span key={idx}>{topic}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="project-actions"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <FaGithub />
                      </a>
                      {project.homepage && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div className="no-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p>No projects found for {activeLanguage}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}

        {/* Featured Projects from CV */}
        {data && data.length > 0 && (
          <div className="featured-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ⭐ Special Projects
            </motion.h3>

            <motion.div
              className="featured-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {data.map((project) => (
                <motion.div
                  key={project.id}
                  className="featured-card"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileHover={{ y: -15 }}
                >
                  <div className="featured-header">
                    <h4>{project.title}</h4>
                    <span className="featured-badge">Featured</span>
                  </div>

                  <p className="featured-description">{project.description}</p>

                  {project.features && (
                    <div className="features-list">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-dot">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="featured-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <motion.div
                    className="featured-actions"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  >
                    <a href={project.links.github} className="action-link">
                      <FaGithub /> Code
                    </a>
                    <a href={project.links.live} className="action-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;