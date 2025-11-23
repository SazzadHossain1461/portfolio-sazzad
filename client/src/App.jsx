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

// Default portfolio data
const DEFAULT_DATA = {
  personalInfo: {
    name: 'Sazzad Hossain',
    title: 'Full Stack Developer | AI/ML Enthusiast',
    email: 'Sazzadhossain74274@gmail.com',
    phone: '+88 01983027130',
    location: 'Dhaka-1213, Mohakhali',
    github: 'SazzadHossain1461',
    linkedin: 'sazzadhossain1461'
  },
  about: {
    summary: 'Passionate Full Stack Developer with expertise in React, Node.js, and Machine Learning. Currently pursuing B.Sc in Computer Science & Engineering. Dedicated to building scalable applications and solving complex problems through innovative technologies.',
    education: [
      {
        school: 'Banani Bidyaniketan School and College',
        degree: 'Secondary School Certificate',
        year: 2017,
        result: '5.00 / 5.00'
      },
      {
        school: 'Shaheed Ramiz Uddin Cantonment College',
        degree: 'Higher Secondary Certificate',
        year: 2019,
        result: '4.42 / 5.00'
      },
      {
        school: 'Northern University Bangladesh',
        degree: 'B.Sc (Hon\'s) in Computer Science & Engineering',
        year: 2025,
        result: '2.65 / 4.00'
      }
    ]
  },
  experience: [
    {
      id: 1,
      company: 'Dynamic Flow',
      position: 'Data Entry Operator (Junior Operator)',
      duration: 'March 28, 2021 - August 02, 2021',
      duration_months: 6,
      description: 'Leveraged six months of data entry experience to analyze process flows, identify inefficiencies, and enhance data processing speed and accuracy.'
    },
    {
      id: 2,
      company: 'Oppo Bangladesh',
      position: 'Customer Service Coordinator',
      duration: 'October 7, 2021 - February 15, 2022',
      duration_months: 4,
      description: 'Collaborated with cross-functional teams to resolve process bottlenecks, leveraging customer interaction analysis and improved stakeholder communication.'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'MedAi – AI Healthcare Prediction Platform',
      description: 'A comprehensive healthcare prediction platform using AI/ML models integrated with a modern web interface.',
      technologies: ['React', 'Three.js', 'Flask', 'Python', 'scikit-learn', 'SQLAlchemy', 'PostgreSQL'],
      features: [
        'React + Three.js frontend with bilingual support (English/Bangla)',
        'Advanced 3D animations and interactive UI',
        'Flask API backend serving ML models',
        'Dengue risk prediction',
        'Kidney disease prediction (94.2% accuracy)',
        'Stress prediction model',
        'SQLite and PostgreSQL database support',
        'Modular and well-documented code structure'
      ],
      links: {
        github: '#',
        live: '#'
      },
      image: '/images/medai.jpg',
      featured: true
    }
  ],
  skills: {
    frontend: ['React.js', 'Three.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'Flask', 'RESTful APIs', 'Authentication'],
    ml_ai: ['Python', 'scikit-learn', 'TensorFlow', 'Data Analysis', 'Model Training'],
    databases: ['PostgreSQL', 'SQLite', 'SQLAlchemy', 'Data Modeling'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook'],
    soft_skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management']
  }
};

function App() {
  const [portfolioData, setPortfolioData] = useState(DEFAULT_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
          console.log('✅ Portfolio data fetched from API');
        } else {
          console.warn('⚠️ API returned non-200 status, using default data');
          setPortfolioData(DEFAULT_DATA);
        }
      } catch (error) {
        console.warn('⚠️ Error fetching API, using default data:', error.message);
        setPortfolioData(DEFAULT_DATA);
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