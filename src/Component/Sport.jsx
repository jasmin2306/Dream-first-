import React from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard, SkeletonCard } from '../Component/NewsCard';

const Sport = () => {
/**
 * A component that displays sports news articles.
 * It fetches the articles from the backend using the useNews hook.
 * It renders a heading, a brief description, and a list of news cards.
 * The list of news cards is paginated and can be loaded more by clicking on the "Load more" button.
 */
  const { articles, loading, isMock } = useNews('sports');
  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{
        background: 'linear-gradient(135deg, #FFC107 0%, #D97706 40%, #9B1C1C 100%)',
        padding: '50px 0 40px', marginBottom: 40,
        borderBottom: '3px solid #111',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',top:-50,left:-30,width:200,height:200,borderRadius:'50%',background:'rgba(0,0,0,0.08)',pointerEvents:'none' }}/>
        <div className="container">
          <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            🏆 SPORTS
          </span>
          <h1 style={{ color: '#111', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginTop: 12, marginBottom: 8 }}>Sports News</h1>
          <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '1rem', maxWidth: 500, margin: 0 }}>
            Cricket, football, athletics — all the action from India and around the world.
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

export default Sport;
