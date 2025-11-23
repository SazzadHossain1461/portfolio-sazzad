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
        // Set default data if API fails
        setPortfolioData({
          personalInfo: {
            name: 'Sazzad Hossain',
            title: 'Full Stack Developer | AI/ML Enthusiast',
            email: 'Sazzadhossain74274@gmail.com',
            phone: '+88 01983027130',
            location: 'Dhaka-1213, Mohakhali',
            github: 'SazzadHossain1461',
            linkedin: 'sazzadhossain1461'
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
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