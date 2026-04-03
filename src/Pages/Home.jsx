// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { useNews } from '../hooks/useNews';
// import { NewsCard, SkeletonCard } from '../Component/NewsCard';



// const Home = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchQuery = new URLSearchParams(location.search).get('search') || '';

//   // Get data from hook
//   const { articles: rawArticles, loading, isMock } = useNews('general', searchQuery);

//   // CRITICAL FIX: Ensure articles is ALWAYS an array before we use .slice() or .length
//   const articles = Array.isArray(rawArticles) ? rawArticles : [];

//   // PWA install state
//   const [deferredPrompt, setDeferredPrompt] = useState(null);
//   const [installed, setInstalled] = useState(false);
//   const [btnText, setBtnText] = useState('📲 Install App');
//   const [showIOS, setShowIOS] = useState(false);
//   const [showDesktopHint, setShowDesktopHint] = useState(false);

//   const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//   useEffect(() => {
//     if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
//       setInstalled(true);
//       setBtnText('✅ Installed');
//       return;
//     }

//     const handler = (e) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       window.__pwaInstallPrompt = e;
//     };
//     window.addEventListener('beforeinstallprompt', handler);

//     if (window.__pwaInstallPrompt) {
//       setDeferredPrompt(window.__pwaInstallPrompt);
//     }

//     window.addEventListener('appinstalled', () => {
//       setInstalled(true);
//       setBtnText('✅ Installed');
//       setDeferredPrompt(null);
//     });

//     return () => window.removeEventListener('beforeinstallprompt', handler);
//   }, []);

//   const handleInstall = async () => {
//     if (installed || window.matchMedia('(display-mode: standalone)').matches) {
//       setBtnText('✅ Already Installed!');
//       setTimeout(() => setBtnText('✅ Installed'), 2000);
//       return;
//     }

//     const prompt = deferredPrompt || window.__pwaInstallPrompt;
//     if (prompt) {
//       setBtnText('⏳ Installing...');
//       try {
//         await prompt.prompt();
//         const { outcome } = await prompt.userChoice;
//         if (outcome === 'accepted') {
//           setInstalled(true);
//           setBtnText('✅ Installed!');
//           window.__pwaInstallPrompt = null;
//           setDeferredPrompt(null);
//         } else {
//           setBtnText('📲 Install App');
//         }
//       } catch {
//         setBtnText('📲 Install App');
//       }
//       return;
//     }

//     if (isIOS) {
//       setShowIOS(true);
//       return;
//     }

//     setBtnText('🔄 Check browser...');
//     setTimeout(() => {
//       setBtnText('📲 Install App');
//       setShowDesktopHint(true);
//       setTimeout(() => setShowDesktopHint(false), 4000);
//     }, 1000);
//   };

//   // Hero article is the first item in the safe array
//   const heroArticle = articles.length > 0 ? articles[0] : null;

//   return (
//     <div style={{ background: '#FFF8F0', minHeight: '100vh' }}>
//       <style>{`
//         @keyframes fadeIn{from{opacity:0}to{opacity:1}}
//         @keyframes slideUp{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes fadeInUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
//         .fade-in{animation:fadeInUp 0.4s ease forwards}
//         .hint-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111;color:#FFC107;padding:12px 24px;border-radius:30px;font-size:13px;font-weight:700;border:1px solid rgba(255,193,7,0.3);z-index:9998;white-space:nowrap;animation:slideUp 0.3s ease}
//       `}</style>

//       {showDesktopHint && (
//         <div className="hint-toast">
//           💡 Click the ⊕ icon near the Chrome address bar → Install
//         </div>
//       )}

//       {showIOS && (
//         <div onClick={() => setShowIOS(false)} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:9999,display:'flex',alignItems:'flex-end',justifyContent:'center' }}>
//           <div onClick={e => e.stopPropagation()} style={{ background:'#fff',borderRadius:'24px 24px 0 0',padding:'20px 24px 44px',width:'100%',maxWidth:520,animation:'slideUp 0.3s ease',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)' }}>
//             <div style={{ width:40,height:4,background:'#e5e7eb',borderRadius:4,margin:'0 auto 20px' }}/>
//             <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:24 }}>
//               <img src="/icons/icon-192.png" alt="" style={{ width:52,height:52,borderRadius:12,border:'2px solid #FFC107' }} onError={e=>e.target.style.display='none'}/>
//               <div>
//                 <strong style={{ fontSize:'1rem',color:'#111',display:'block' }}>Install Dream First News</strong>
//                 <span style={{ fontSize:12,color:'#999' }}>Add to iPhone Home Screen</span>
//               </div>
//               <button onClick={() => setShowIOS(false)} style={{ marginLeft:'auto',background:'#f3f4f6',border:'none',borderRadius:'50%',width:32,height:32,fontSize:20,cursor:'pointer',color:'#555',display:'flex',alignItems:'center',justifyContent:'center' }}>×</button>
//             </div>
//             {[
//               ['1','⬆️','Tap Share button','Bottom of Safari browser'],
//               ['2','📋','Tap "Add to Home Screen"','Scroll down in share sheet'],
//               ['3','✅','Tap "Add"','App icon appears on home screen!'],
//             ].map(([n,e,t,s]) => (
//               <div key={n} style={{ display:'flex',gap:14,marginBottom:18,alignItems:'center' }}>
//                 <div style={{ width:36,height:36,borderRadius:'50%',background:'#9B1C1C',color:'#FFC107',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14 }}>{n}</div>
//                 <div><p style={{ margin:'0 0 2px',fontWeight:700,fontSize:14,color:'#111' }}><span style={{ fontSize:16,marginRight:6 }}>{e}</span>{t}</p><p style={{ margin:0,fontSize:12,color:'#999' }}>{s}</p></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="container py-4">
//         {searchQuery && (
//           <div style={{ marginBottom:20 }}>
//             <span style={{ background:'#FEF3C7',color:'#92400e',padding:'6px 14px',borderRadius:20,fontSize:14,fontWeight:700 }}>
//               🔍 "{searchQuery}"
//             </span>
//             <button onClick={() => navigate('/')} style={{ marginLeft:10,background:'none',border:'none',color:'#9B1C1C',cursor:'pointer',fontWeight:700 }}>
//               ✕ Clear
//             </button>
//           </div>
//         )}

//         {!searchQuery && (
//           <div className="row mb-5">
//             <div className="col-12">
//               <div style={{
//                 background:'linear-gradient(135deg,#111111 0%,#2D0A0A 45%,#9B1C1C 100%)',
//                 borderRadius:20, padding:'40px', color:'#fff', position:'relative', overflow:'hidden',
//                 boxShadow:'0 20px 60px rgba(155,28,28,0.35)',
//                 border:'1px solid rgba(255,193,7,0.15)',
//               }}>
//                 <span style={{ background:'#FFC107',color:'#111',padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:800 }}>● LIVE</span>

//                 {loading ? (
//                   <div style={{ marginTop:20 }}>Loading Hero...</div>
//                 ) : heroArticle && (
//                   <>
//                     <h1 style={{ fontWeight:800,marginTop:14,fontSize:'2rem' }}>{heroArticle.title}</h1>
//                     <p style={{ opacity:0.78,maxWidth:620,marginBottom:26 }}>{heroArticle.description}</p>
//                     <div style={{ display:'flex',gap:12 }}>
//                       <Link to="/stories" style={{ background:'#FFC107',color:'#111',borderRadius:50,padding:'12px 26px',fontWeight:800,textDecoration:'none' }}>📖 Read Story</Link>
//                       <button onClick={handleInstall} style={{ background: installed ? 'rgba(34,197,94,0.2)' : 'rgba(255,193,7,0.15)', color:'#fff',borderRadius:50,padding:'12px 26px',fontWeight:700, border: installed ? '2px solid #22c55e' : '2px solid #FFC107', cursor:'pointer' }}>
//                         {btnText}
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold m-0" style={{ fontSize:'1.3rem' }}>Latest Stories</h2>
//           <span style={{ fontSize:13,color:'#bbb' }}>{loading ? 'Loading...' : `${articles.length} articles`}</span>
//         </div>

//         <div className="row g-4">
//           {loading
//             ? Array.from({ length: 6 }).map((_, i) => (
//                 <div key={i} className="col-md-4 col-sm-6"><SkeletonCard /></div>
//               ))
//             : articles.slice(searchQuery ? 0 : 6).map((article, i) => (
//                 <div key={article.url || i} className="col-md-4 col-sm-6 fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
//                   <NewsCard article={article} />
//                 </div>
//               ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
  const imageUrl = "src/InsightNews.apk"; 

const downloadImage = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob(); // Image ko blob mein badalna
    const blobURL = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "InsightNews.apk"; // File ka naam jo aap rakhna chahen
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobURL); // Memory free karna
  } catch (error) {
    console.error("Download error:", error);
    alert("CORS issue ya network error ki wajah se download nahi ho saka.");
  }
};

  const handleDownload = () => {
    downloadImage(imageUrl);
  };
const Home = () => {
  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{
        background: 'linear-gradient(135deg, #7F1D1D 0%, #9B1C1C 50%, #FFC107 100%)',
        padding: '50px 0 40px', marginBottom: 40,
        borderBottom: '3px solid #111',

        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: -40, right: -30, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,193,7,0.1)', pointerEvents: 'none' }} />
        <div className="container">
          <span style={{ background: '#111', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            ✨ WELCOME
          </span>

          <div className="row">
            <div className="col-6">
              <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', marginTop: 14, marginBottom: 8 }}>Dream First – Discover Stories That Matter</h1>

              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 680, lineHeight: 1.6 }}>
                Stay updated with the latest news, inspiring stories, and trending topics
                from across India. Dream First brings you real-time insights in a simple,
                powerful, and engaging way.
              </p>

            </div>
            </div>
            <div className="col-6">
              <button 
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Install App
      </button>

              

            </div>

        

        </div>
        {/* RIGHT SIDE */}

      </div>


      {/* <div className="container">
        <div className="row g-4">
          <div className="col-md-4 col-sm-6">
            <div style={{ background: '#fff', borderRadius: 20, padding: '24px', boxShadow: '0 4px 28px rgba(155,28,28,0.1)', border: '1px solid rgba(255,193,7,0.2)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#111', borderLeft: '4px solid #9B1C1C', paddingLeft: 14, marginBottom: 14 }}>
                Explore Local Stories
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.85, margin: 0 }}>
                From the bustling streets of Mumbai to the serene backwaters of Kerala — discover news that captures the soul of every corner of India.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div style={{ background: '#fff', borderRadius: 20, padding: '24px', boxShadow: '0 4px 28px rgba(155,28,28,0.1)', border: '1px solid rgba(255,193,7,0.2)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#111', borderLeft: '4px solid #9B1C1C', paddingLeft: 14, marginBottom: 14 }}>
                In-Depth Analysis
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.85, margin: 0 }}>
                Go beyond the headlines with expert insights and comprehensive coverage that helps you understand the stories shaping our nation.
              </p>        
            </div>  
          </div>
          <div className="col-md-4 col-sm-6">
            <div style={{ background: '#fff', borderRadius: 20, padding: '24px', boxShadow: '0 4px 28px rgba(155,28,28,0.1)', border: '1px solid rgba(255,193,7,0.2)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#111', borderLeft: '4px solid #9B1C1C', paddingLeft: 14, marginBottom: 14 }}>
                Connect with Communities
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.85, margin: 0 }}>
                Join a vibrant community of readers and storytellers who share your passion for news that matters.
              </p>        
            </div>  
          </div>
        </div>
      </div> */}


      {/* 4 image here it show the beauty of india and its culture and its unity in diversity */}

      <div className="container my-5 py-5 text-center " >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          <img src="src/assets/advertisment.jpeg" alt="Ayodhya" style={{ width: 300, height: 240, objectFit: 'contain', borderRadius: 12, boxShadow: '0 4px 20px rgba(155,28,28,0.1)' }} />
          <img src="src/assets/ajmer.jpeg" alt="Ajmer Sharif" style={{ width: 300, height: 240, objectFit: 'contain', borderRadius: 12, boxShadow: '0 4px 20px rgba(155,28,28,0.1)' }} />
          <img src="src/assets/statue.jpeg" alt="Statue of Unity" style={{ width: 300, height: 240, objectFit: 'contain', borderRadius: 12, boxShadow: '0 4px 20px rgba(155,28,28,0.1)' }} />
          <img src="src/assets/sawariya.png" alt="Sanwariya Seth Temple" style={{ width: 300, height: 240, objectFit: 'contain', borderRadius: 12, boxShadow: '0 4px 20px rgba(155,28,28,0.1)' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;