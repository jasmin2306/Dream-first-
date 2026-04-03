import { useState, useEffect } from 'react';

export const API_URL = 'https://dartfrog-api-203375356800.asia-south1.run.app';

export function useNews(category = 'general', searchQuery = '') {
  const [allArticles, setAllArticles] = useState([]); 
  const [articles, setArticles] = useState([]);       
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setAllArticles(data);
        setArticles(data); // Initial load
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Search aur Category filter logic
  useEffect(() => {
    let filtered = Array.isArray(allArticles) ? [...allArticles] : [];

    // 1. Category Filter (Agar 'general' nahi hai toh filter karo)
    if (category && category !== 'general') {
      filtered = filtered.filter(item => 
        item.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // 2. Search Filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setArticles(filtered);
  }, [category, searchQuery, allArticles]);

  return { articles, loading };
}






export default useNews;