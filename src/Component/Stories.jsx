import React from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard, SkeletonCard } from '../Component/NewsCard';
import { useState, useEffect } from 'react';

const Stories = () => {
  const { articles, loading } = useNews('general');

  const [stories, setStories] = useState([]);
  useEffect(() => {
  fetch('https://dartfrog-api-203375356800.asia-south1.run.app') 
    .then(res => res.json())
    .then(data => {
      setStories(data); 
    })
    .catch(err => console.log(err));
}, []);

return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{
        background: 'linear-gradient(135deg, #7F1D1D 0%, #9B1C1C 50%, #FFC107 100%)',
        padding: '50px 0 40px', marginBottom: 40,
        borderBottom: '3px solid #111',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',bottom:-40,right:-30,width:180,height:180,borderRadius:'50%',background:'rgba(255,193,7,0.1)',pointerEvents:'none' }}/>
        <div className="container">
          <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            ✨ STORIES
          </span>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginTop: 12, marginBottom: 8 }}>Inspiring Journeys from Across India</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 500, margin: 0 }}>
            Real people, real journeys — stories that inspire, move, and remind us what matters.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="col-md-4 col-sm-6"><SkeletonCard /></div>)
            : stories.map((article, i) => (
                <div key={i} className="col-md-4 col-sm-6">
                  <NewsCard article={article} />
                </div>
              ))
          }
        </div>
      </div>
    </div>





    
  );
};

export default Stories;


