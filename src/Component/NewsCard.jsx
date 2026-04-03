// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Time ago function for createdAt
// function timeAgo(dateStr) {
//   if (!dateStr) return "Just now";
//   const diff = (Date.now() - new Date(dateStr)) / 1000;
//   if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//   if (diff < 8400) return `${Math.floor(diff / 3600)}h ago`;
//   return `${Math.floor(diff / 86400)}d ago`;
// }

// export function NewsCard({ article, size = 'normal' }) {
//   const [imgErr, setImgErr] = useState(false);
//   const isBig = size === 'big';

//   const displayImage = article.images && article.images.length > 0 ? article.images[0] : null;

//   return (
//     <div className="news-card h-100 shadow-sm" 
//       style={{ 
//         borderRadius: 15, 
//         overflow: 'hidden', 
//         border: '1px solid #eee', 
//         transition: '0.3s', 
//         background: '#fff',
//         cursor: 'pointer' 
//       }}
//       onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
//       onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
//     >
//       {/* Image Section */}
//       <div style={{ position: 'relative', height: isBig ? 280 : 200, background: '#f8f9fa' }}>
//         {displayImage && !imgErr ? (
//           <img
//             src={displayImage}
//             alt={article.title}
//             onError={() => setImgErr(true)}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         ) : (
//           <div className="d-flex align-items-center justify-content-center h-100 text-muted">
//             No Image
//           </div>
//         )}
//         <span style={{
//           position: 'absolute', top: 12, left: 12,
//           background: '#6366f1', color: '#fff',
//           padding: '2px 10px', borderRadius: 20,
//           fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase'
//         }}>
//           {article.category || 'News'}
//         </span>
//       </div>

//       {/* Content Section */}
//       <div className="card-body p-3">
//         <h5 style={{
//           fontSize: isBig ? '1.2rem' : '1rem',
//           fontWeight: 700,
//           color: '#111',
//           display: '-webkit-box', WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical', overflow: 'hidden'
//         }}>
//           {article.title}
//         </h5>

//         <p style={{
//           fontSize: '0.85rem', color: '#666',
//           display: '-webkit-box', WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical', overflow: 'hidden',
//           whiteSpace: 'pre-line' // Important for Gujarati line breaks
//         }}>
//           {article.description}
//         </p>

//         <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-2">
//           <div className="d-flex flex-column">
//             <span style={{ fontSize: 11, fontWeight: 600 }}>By {article.userName || 'Admin'}</span>
//             <span style={{ fontSize: 10, color: '#999' }}>{timeAgo(article.createdAt)}</span>
//           </div>
//          <Link 
//     to={`/article/${article._id || article.id}`} 
//     state={{ article: article }} 
//     className="btn btn-sm text-white" 
//     style={{ background: '#6366f1', borderRadius: 20, fontSize: 11, textDecoration: 'none' }}
//   >
//     Read More
//   </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Skeleton and MockBanner remains same or remove MockBanner if not needed
// export function SkeletonCard() {
//   return (
//     <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: 15, overflow: 'hidden' }}>
//       <div style={{ height: 200, background: '#eee' }}></div>
//       <div className="card-body">
//         <div style={{ height: 20, background: '#eee', marginBottom: 10, width: '80%' }}></div>
//         <div style={{ height: 15, background: '#eee', width: '100%' }}></div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// function timeAgo(dateStr) {
//   const diff = (Date.now() - new Date(dateStr)) / 1000;
//   if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//   if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
//   return `${Math.floor(diff / 86400)}d ago`;
// }

// // ── Article Detail Modal  ──
// function ArticleModal({ article, onClose }) {
//   if (!article) return null;
//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: 'fixed', inset: 0, zIndex: 9999,
//         background: 'rgba(0,0,0,0.65)',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         padding: '16px',
//         animation: 'fadeIn 0.2s ease',
//       }}>
//       <div
//         onClick={e => e.stopPropagation()}
//         style={{
//           background: '#fff', borderRadius: 20,
//           width: '100%', maxWidth: 720,
//           maxHeight: '90vh', overflow: 'hidden',
//           display: 'flex', flexDirection: 'column',
//           boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
//           animation: 'slideUp 0.3s cubic-bezier(0.34,1.2,0.64,1)',
//         }}>

//         {/* Close button */}
//         <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '14px 16px 0' }}>
//           <button onClick={onClose}
//             style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 20, cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             ×
//           </button>
//         </div>

//         {/* Scrollable content */}
//         <div style={{ overflowY: 'auto', padding: '0 28px 28px' }}>
//           {/* Source + time */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
//             <span style={{ background: '#111', color: '#FFC107', padding: '3px 12px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>
//               {article.source?.name || 'Dream First News'}
//             </span>
//             <span style={{ fontSize: 12, color: '#999' }}>{timeAgo(article.publishedAt)}</span>
//             {article.author && <span style={{ fontSize: 12, color: '#999' }}>· {article.author}</span>}
//           </div>

//           {/* Title */}
//           <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.2rem,3vw,1.6rem)', color: '#111', lineHeight: 1.3, marginBottom: 16 }}>
//             {article.title}
//           </h2>

//           {/* Image */}
//           {article.urlToImage && (
//             <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 20, maxHeight: 340 }}>
//               <img src={article.urlToImage} alt={article.title}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                 onError={e => e.target.parentElement.style.display = 'none'} />
//             </div>
//           )}

//           {/* Description */}
//           <p style={{ color: '#374151', lineHeight: 1.85, fontSize: '1rem', marginBottom: 24 }}>
//             {article.content || article.description || 'Full article available on the source website.'}
//           </p>

//           {/* Read full article button */}
//           {article.url && article.url !== '#' && (
//             <a href={article.url} target="_blank" rel="noopener noreferrer"
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                 background: 'linear-gradient(135deg,#111,#9B1C1C)',
//                 color: '#FFC107', padding: '12px 28px', borderRadius: 50,
//                 fontWeight: 800, fontSize: '0.92rem', textDecoration: 'none',
//                 border: '2px solid rgba(255,193,7,0.3)',
//               }}>
//               Read Full Article →
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── News Card ──
// export function NewsCard({ article }) {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [imgErr, setImgErr] = useState(false);

//   return (
//     <>
//       {modalOpen && <ArticleModal article={article} onClose={() => setModalOpen(false)} />}

//       <div
//         className="news-card h-100"
//         onClick={() => setModalOpen(true)}
//         style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,193,7,0.2)', transition: 'all 0.25s', cursor: 'pointer', background: '#fff' }}
//         onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(155,28,28,0.13)'; }}
//         onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

//         {/* Image */}
//         {article.urlToImage && !imgErr ? (
//           <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
//             <img src={article.urlToImage} alt={article.title} onError={() => setImgErr(true)}
//               style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
//               onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
//               onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
//             <span style={{ position: 'absolute', top: 10, left: 10, background: '#111', color: '#FFC107', padding: '3px 10px', borderRadius: 20, fontSize: 10, fontWeight: 800 }}>
//               {article.source?.name || 'Dream First'}
//             </span>
//           </div>
//         ) : (
//           <div style={{ height: 160, background: 'linear-gradient(135deg,#111,#9B1C1C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <span style={{ color: '#FFC107', fontWeight: 800, fontSize: 13, opacity: 0.7 }}>{article.source?.name || 'Dream First News'}</span>
//           </div>
//         )}

//         {/* Body */}
//         <div style={{ padding: '14px 16px 16px' }}>
//           <h5 style={{ fontWeight: 700, fontSize: '0.93rem', lineHeight: 1.45, color: '#111', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 8 }}>
//             {article.title}
//           </h5>
//           {article.description && (
//             <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 12 }}>
//               {article.description}
//             </p>
//           )}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <span style={{ fontSize: 11, color: '#bbb' }}>{timeAgo(article.publishedAt)}</span>
//             <span style={{ background: '#111', color: '#FFC107', borderRadius: 20, fontSize: 11, padding: '4px 14px', fontWeight: 700 }}>
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function SkeletonCard() {
//   return (
//     <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #f0f0f0', background: '#fff' }}>
//       <div style={{ height: 200, background: 'linear-gradient(90deg,#f5f5f5 25%,#ebebeb 50%,#f5f5f5 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
//       <div style={{ padding: 16 }}>
//         {[80, 100, 60].map((w, i) => (
//           <div key={i} style={{ height: i === 0 ? 14 : 11, background: '#f0f0f0', borderRadius: 6, width: `${w}%`, marginBottom: 10 }} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MockBanner() {
//   return (
//     <div style={{ background: '#FEF9EE', border: '1px solid rgba(255,193,7,0.4)', borderRadius: 10, padding: '10px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
//       <span style={{ fontSize: 16 }}>⚠️</span>
//       <div>
//         <strong style={{ fontSize: 13, color: '#92400e' }}>Demo Mode</strong>
//         <p style={{ margin: 0, fontSize: 12, color: '#b45309' }}>
//           Add your API key in <code>src/hooks/useNews.js</code> — free key at <a href="https://newsapi.org" target="_blank" rel="noreferrer" style={{ color: '#9B1C1C' }}>newsapi.org</a>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';

// function timeAgo(dateStr) {
//   const diff = (Date.now() - new Date(dateStr)) / 1000;
//   if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//   if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
//   return `${Math.floor(diff / 86400)}d ago`;
// }

// // ── Article Detail Modal (sandal page style) ──
// function ArticleModal({ article, onClose }) {
//   if (!article) return null;
//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: 'fixed', inset: 0, zIndex: 9999,
//         background: 'rgba(0,0,0,0.65)',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         padding: '16px',
//         animation: 'fadeIn 0.2s ease',
//       }}>
//       <div
//         onClick={e => e.stopPropagation()}
//         style={{
//           background: '#fff', borderRadius: 20,
//           width: '100%', maxWidth: 720,
//           maxHeight: '90vh', overflow: 'hidden',
//           display: 'flex', flexDirection: 'column',
//           boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
//           animation: 'slideUp 0.3s cubic-bezier(0.34,1.2,0.64,1)',
//         }}>

//         {/* Close button */}
//         <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '14px 16px 0' }}>
//           <button onClick={onClose}
//             style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 20, cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             ×
//           </button>
//         </div>

//         {/* Scrollable content */}
//         <div style={{ overflowY: 'auto', padding: '0 28px 28px' }}>
//           {/* Source + time */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
//             <span style={{ background: '#111', color: '#FFC107', padding: '3px 12px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>
//               {article.source?.name || 'Dream First News'}
//             </span>
//             <span style={{ fontSize: 12, color: '#999' }}>{timeAgo(article.publishedAt)}</span>
//             {article.author && <span style={{ fontSize: 12, color: '#999' }}>· {article.author}</span>}
//           </div>

//           {/* Title */}
//           <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.2rem,3vw,1.6rem)', color: '#111', lineHeight: 1.3, marginBottom: 16 }}>
//             {article.title}
//           </h2>

//           {/* Image */}
//           {article.urlToImage && (
//             <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 20, maxHeight: 340 }}>
//               <img src={article.urlToImage} alt={article.title}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                 onError={e => e.target.parentElement.style.display = ''} />
//             </div>
//           )}

//           {/* Description */}
//           <p style={{ color: '#374151', lineHeight: 1.85, fontSize: '1rem', marginBottom: 24 }}>
//             {article.content || article.description || 'Full article available on the source website.'}
//           </p>

//           {/* Read full article button */}
//           {article.url && article.url !== '#' && (
//             <a href={article.url} target="_blank" rel="noopener noreferrer"
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                 background: 'linear-gradient(135deg,#111,#9B1C1C)',
//                 color: '#FFC107', padding: '12px 28px', borderRadius: 50,
//                 fontWeight: 800, fontSize: '0.92rem', textDecoration: 'none',
//                 border: '2px solid rgba(255,193,7,0.3)',
//               }}>
//               Read Full Article →
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── News Card ──
// export function NewsCard({ article }) {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [imgErr, setImgErr] = useState(false);

//   return (
//     <>
//       {modalOpen && <ArticleModal article={article} onClose={() => setModalOpen(false)} />}

//       <div
//         className="news-card h-100"
//         onClick={() => setModalOpen(true)}
//         style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,193,7,0.2)', transition: 'all 0.25s', cursor: 'pointer', background: '#fff' }}
//         onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(155,28,28,0.13)'; }}
//         onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

//         {/* Image */}
//         {article.urlToImage && !imgErr ? (
//           <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
//             <img src={article.urlToImage} alt={article.title} onError={() => setImgErr(true)}
//               style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
//               onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
//               onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
//             <span style={{ position: 'absolute', top: 10, left: 10, background: '#111', color: '#FFC107', padding: '3px 10px', borderRadius: 20, fontSize: 10, fontWeight: 800 }}>
//               {article.source?.name || 'Dream First'}
//             </span>
//           </div>
//         ) : (
//           <div style={{ height: 160, background: 'linear-gradient(135deg,#111,#9B1C1C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <span style={{ color: '#FFC107', fontWeight: 800, fontSize: 13, opacity: 0.7 }}>{article.source?.name || 'Dream First News'}</span>
//           </div>
//         )}

//         {/* Body */}
//         <div style={{ padding: '14px 16px 16px' }}>
//           <h5 style={{ fontWeight: 700, fontSize: '0.93rem', lineHeight: 1.45, color: '#111', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 8 }}>
//             {article.title}
//           </h5>
//           {article.description && (
//             <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 12 }}>
//               {article.description}
//             </p>
//           )}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <span style={{ fontSize: 11, color: '#bbb' }}>{timeAgo(article.publishedAt)}</span>
//             <span style={{ background: '#111', color: '#FFC107', borderRadius: 20, fontSize: 11, padding: '4px 14px', fontWeight: 700 }}>
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function SkeletonCard() {
//   return (
//     <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #f0f0f0', background: '#fff' }}>
//       <div style={{ height: 200, background: 'linear-gradient(90deg,#f5f5f5 25%,#ebebeb 50%,#f5f5f5 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
//       <div style={{ padding: 16 }}>
//         {[80, 100, 60].map((w, i) => (
//           <div key={i} style={{ height: i === 0 ? 14 : 11, background: '#f0f0f0', borderRadius: 6, width: `${w}%`, marginBottom: 10 }} />
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// function timeAgo(dateStr) {
//   const date = new Date(dateStr);
//   if (isNaN(date)) return "Just now";
//   const diff = (Date.now() - date) / 1000;
//   if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//   if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
//   return `${Math.floor(diff / 86400)}d ago`;
// }

// // ── Article Detail Modal ──
// function ArticleModal({ article, onClose }) {
//   if (!article) return null;
//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: 'fixed', inset: 0, zIndex: 9999,
//         background: 'rgba(0,0,0,0.8)',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         padding: '16px',
//         backdropFilter: 'blur(4px)',
//       }}>
//       <div
//         onClick={e => e.stopPropagation()}
//         style={{
//           background: '#fff', borderRadius: 24,
//           width: '100%', maxWidth: 720,
//           maxHeight: '90vh', overflow: 'hidden',
//           display: 'flex', flexDirection: 'column',
//           boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
//         }}>

//         {/* Close button */}
//         <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px 0' }}>
//           <button onClick={onClose}
//             style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: 40, height: 40, fontSize: 24, cursor: 'pointer', color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             ×
//           </button>
//         </div>

//         {/* Scrollable content */}
//         <div style={{ overflowY: 'auto', padding: '0 32px 32px' }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
//             <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>
//               {article.source?.name || 'Dream First News'}
//             </span>
//             <span style={{ fontSize: 12, color: '#999' }}>{timeAgo(article.publishedAt)}</span>
//           </div>

//           <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: '#111', lineHeight: 1.3, marginBottom: 20 }}>
//             {article.title}
//           </h2>

//           {/* Fixed Modal Image */}
//           {article.urlToImage && (
//             <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24, background: '#f0f0f0' }}>
//               <img 
//                 src={article.urlToImage} 
//                 alt="news"
//                 style={{ width: '100%', maxHeight: 400, objectFit: 'cover', display: 'block' }}
//                 onError={(e) => { e.target.style.display = 'none'; }}
//               />
//             </div>
//           )}

//           <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 28 }}>
//             {article.content || article.description || 'Visit the source website for the full story.'}
//           </p>

//           <a href={article.url} target="_blank" rel="noopener noreferrer"
//             style={{
//               display: 'inline-flex', alignItems: 'center', gap: 10,
//               background: 'linear-gradient(135deg,#111,#9B1C1C)',
//               color: '#FFC107', padding: '14px 32px', borderRadius: 50,
//               fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
//               boxShadow: '0 10px 20px rgba(155,28,28,0.2)'
//             }}>
//             Read Full Article →
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── News Card ──
// export function NewsCard({ article }) {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [imgErr, setImgErr] = useState(false);

//   const handleImgError = (e) => {
//     setImgErr(true);
//   };

//   return (
//     <>
//       {modalOpen && <ArticleModal article={article} onClose={() => setModalOpen(false)} />}

//       <div
//         className="news-card"
//         onClick={() => setModalOpen(true)}
//         style={{ 
//           height: '100%',
//           borderRadius: 18, 
//           overflow: 'hidden', 
//           border: '1px solid rgba(255,193,7,0.15)', 
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
//           cursor: 'pointer', 
//           background: '#fff',
//           display: 'flex',
//           flexDirection: 'column'
//         }}
//         onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
//         onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

//         {/* Image Section */}
//         <div style={{ position: 'relative', overflow: 'hidden', height: 210, background: '#f5f5f5', flexShrink: 0 }}>
//           {article.urlToImage && !imgErr ? (
//             <img 
//               src={article.urlToImage} 
//               alt={article.title} 
//               onError={handleImgError}
//               loading="lazy"
//               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//             />
//           ) : (
//             /* Fallback UI for when the image fails to load */
//             <div style={{ 
//               width: '100%', 
//               height: '100%', 
//               background: 'linear-gradient(135deg, #1e1e1e 0%, #9B1C1C 100%)', 
//               display: 'flex', 
//               flexDirection: 'column',
//               alignItems: 'center', 
//               justifyContent: 'center',
//               padding: '20px',
//               textAlign: 'center'
//             }}>
//                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📰</div>
//                <span style={{ color: '#FFC107', fontWeight: 800, fontSize: 14, letterSpacing: '0.5px' }}>DREAM FIRST NEWS</span>
//             </div>
//           )}
          
//           <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(4px)', color: '#FFC107', padding: '4px 12px', borderRadius: 50, fontSize: 10, fontWeight: 800 }}>
//             {article.source?.name || 'Dream First'}
//           </div>
//         </div>

//         {/* Content Body */}
//         <div style={{ padding: '18px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//           <h5 style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.4, color: '#111', marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
//             {article.title}
//           </h5>
          
//           <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, marginBottom: 'auto', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
//             {article.description || "Latest updates and breaking news from Dream First. Click to read the complete story."}
//           </p>

//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
//             <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>{timeAgo(article.publishedAt)}</span>
//             <div style={{ background: '#111', color: '#FFC107', borderRadius: 50, fontSize: 11, padding: '6px 16px', fontWeight: 800 }}>
//               Read More
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </>
//   );
// }
//   export function SkeletonCard() {
//     return (
//       <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #f0f0f0', background: '#fff' }}>
//         <div style={{ height: 200, background: 'linear-gradient(90deg,#f5f5f5 25%,#ebebeb 50%,#f5f5f5 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
//         <div style={{ padding: 16 }}>
//           {[80, 100, 60].map((w, i) => (
//             <div key={i} style={{ height: i === 0 ? 14 : 11, background: '#f0f0f0', borderRadius: 6, width: `${w}%`, marginBottom: 10 }} />
//           ))}
//         </div>
//       </div>
//     );
//   }



import React, { useState } from 'react';

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return "Just now";
  const diff = (Date.now() - date) / 1000;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// ✅ Image proxy — fixes News API hotlink/CORS block
function proxyImg(url) {
  if (!url) return null;
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=600&q=80`;
}

// ── Article Detail Modal ──
function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(4px)',
      }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 24,
          width: '100%', maxWidth: 720,
          maxHeight: '90vh', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        }}>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px 0' }}>
          <button onClick={onClose}
            style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: 40, height: 40, fontSize: 24, cursor: 'pointer', color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ×
          </button>
        </div>

        <div style={{ overflowY: 'auto', padding: '0 32px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>
              {article.source?.name || 'Dream First News'}
            </span>
            <span style={{ fontSize: 12, color: '#999' }}>{timeAgo(article.publishedAt)}</span>
          </div>

          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: '#111', lineHeight: 1.3, marginBottom: 20 }}>
            {article.title}
          </h2>

          {article.urlToImage && (
            <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24, background: '#f0f0f0' }}>
              <img
                src={proxyImg(article.urlToImage)}
                alt="news"
                style={{ width: '100%', maxHeight: 400, objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}

          <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 28 }}>
            {article.content || article.description || 'Visit the source website for the full story.'}
          </p>

          <a href={article.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg,#111,#9B1C1C)',
              color: '#FFC107', padding: '14px 32px', borderRadius: 50,
              fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
              boxShadow: '0 10px 20px rgba(155,28,28,0.2)'
            }}>
            Read Full Article →
          </a>
        </div>
      </div>
    </div>
  );
}

// ── News Card ──
export function NewsCard({ article }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <>
      {modalOpen && <ArticleModal article={article} onClose={() => setModalOpen(false)} />}

      <div
        className="news-card"
        onClick={() => setModalOpen(true)}
        style={{
          height: '100%',
          borderRadius: 18,
          overflow: 'hidden',
          border: '1px solid rgba(255,193,7,0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

        {/* Image Section */}
        <div style={{ position: 'relative', overflow: 'hidden', height: 210, background: '#f5f5f5', flexShrink: 0 }}>
          {article.urlToImage && !imgErr ? (
            <img
              src={proxyImg(article.urlToImage)}
              alt={article.title}
              onError={() => setImgErr(true)}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1e1e1e 0%, #9B1C1C 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📰</div>
              <span style={{ color: '#FFC107', fontWeight: 800, fontSize: 14, letterSpacing: '0.5px' }}>DREAM FIRST NEWS</span>
            </div>
          )}

          <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(4px)', color: '#FFC107', padding: '4px 12px', borderRadius: 50, fontSize: 10, fontWeight: 800 }}>
            {article.source?.name || 'Dream First'}
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '18px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.4, color: '#111', marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {article.title}
          </h5>

          <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, marginBottom: 'auto', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {article.description || "Latest updates and breaking news from Dream First. Click to read the complete story."}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
            <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>{timeAgo(article.publishedAt)}</span>
            <div style={{ background: '#111', color: '#FFC107', borderRadius: 50, fontSize: 11, padding: '6px 16px', fontWeight: 800 }}>
              Read More
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export function SkeletonCard() {
  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #f0f0f0', background: '#fff' }}>
      <div style={{ height: 200, background: 'linear-gradient(90deg,#f5f5f5 25%,#ebebeb 50%,#f5f5f5 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
      <div style={{ padding: 16 }}>
        {[80, 100, 60].map((w, i) => (
          <div key={i} style={{ height: i === 0 ? 14 : 11, background: '#f0f0f0', borderRadius: 6, width: `${w}%`, marginBottom: 10 }} />
        ))}
      </div>
    </div>
  );
}

