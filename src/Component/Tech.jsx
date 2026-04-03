import React from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard, SkeletonCard } from '../Component/NewsCard';

const Tech = () => {
  const { articles, loading, isMock } = useNews('technology');
  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{
        background: 'linear-gradient(135deg, #111111 0%, #1C0A00 50%, #7C2D12 100%)',
        padding: '50px 0 40px', marginBottom: 40,
        borderBottom: '3px solid #FFC107',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',bottom:-40,right:-40,width:180,height:180,borderRadius:'50%',background:'rgba(255,193,7,0.07)',pointerEvents:'none' }}/>
        <div className="container">
          <span style={{ background: '#FFC107', color: '#111', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            💻 TECHNOLOGY
          </span>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginTop: 12, marginBottom: 8 }}>Technology News</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 500, margin: 0 }}>
            AI, space, gadgets, innovation — the future is happening right now.
          </p>
        </div>
      </div>
      <div className="container">
        {isMock && <MockBanner />}
        <div className="row g-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="col-md-4 col-sm-6"><SkeletonCard /></div>)
            : articles.map((article, i) => (
                <div key={article.url || i} className="col-md-4 col-sm-6">
                  <NewsCard article={article} />
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Tech;
