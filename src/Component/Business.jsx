// 

import React from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard, SkeletonCard } from '../Component/NewsCard';

const Business = () => {
  const { articles, loading, isMock } = useNews('business');
  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{
        background: 'linear-gradient(135deg, #9B1C1C 0%, #B91C1C 40%, #FFC107 100%)',
        padding: '50px 0 40px', marginBottom: 40,
        borderBottom: '3px solid #FFC107',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',top:-50,right:-50,width:220,height:220,borderRadius:'50%',background:'rgba(255,255,255,0.06)',pointerEvents:'none' }}/>
        <div className="container">
          <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            💼 BUSINESS
          </span>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginTop: 12, marginBottom: 8 }}>Business News</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 500, margin: 0 }}>
            Markets, companies, economy — stay ahead with the latest business intelligence.
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

export default Business;
