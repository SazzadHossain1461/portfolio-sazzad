import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioAPI = {
  getAll: () => api.get('/portfolio'),
  getExperience: () => api.get('/portfolio/experience'),
  getProjects: () => api.get('/portfolio/projects'),
  getSkills: () => api.get('/portfolio/skills'),
};

export const contactAPI = {
  sendMessage: (data) => api.post('/contact/send', data),
};

// GitHub API
export const githubAPI = {
  getUserRepos: (username) => 
    axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }),
  
  getRepoDetails: (owner, repo) =>
    axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }),
};

export default api;