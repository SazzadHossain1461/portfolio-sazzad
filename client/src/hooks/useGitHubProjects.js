import { useState, useEffect } from 'react';
import { githubAPI } from '../utils/api';

export const useGitHubProjects = (username) => {
  const [projects, setProjects] = useState([]);
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await githubAPI.getUserRepos(username);
        
        // Get all repos sorted by stars and updated date
        const allProjects = response.data
          .filter(repo => !repo.fork && repo.description)
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            topics: repo.topics || [],
            updated_at: repo.updated_at,
            pushed_at: repo.pushed_at,
            size: repo.size,
            homepage: repo.homepage,
            links: {
              github: repo.html_url,
              live: repo.homepage || repo.html_url
            }
          }))
          .sort((a, b) => b.stars - a.stars);

        // Get pinned projects (top 3-4 by stars)
        const pinned = allProjects.slice(0, 3);
        
        // Get all other projects
        const regular = allProjects.slice(3, 20);

        setPinnedProjects(pinned);
        setProjects(regular);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError(err.message);
        setProjects([]);
        setPinnedProjects([]);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username]);

  return { projects, pinnedProjects, loading, error };
};

export default useGitHubProjects;