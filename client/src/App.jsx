import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/3D/ParticleBackground';
import './styles/App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app-container">
      <ParticleBackground />
      <Navigation />
      <main className="main-content">
        <Hero data={portfolioData?.personalInfo} />
        <About data={portfolioData?.about} />
        <Experience data={portfolioData?.experience} />
        <Projects data={portfolioData?.projects} />
        <Skills data={portfolioData?.skills} />
        <Contact />
        <Footer data={portfolioData?.personalInfo} />
      </main>
    </div>
  );
}

export default App;