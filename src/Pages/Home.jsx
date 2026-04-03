// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useNews } from '../hooks/useNews';
// import { NewsCard, SkeletonCard } from '../Component/NewsCard';
// import { Link } from 'react-router-dom';

// const BRAND = {
//   yellow:  '#FFC107',
//   red:     '#9B1C1C',
//   black:   '#111111',
//   dark2:   '#2D0A0A',
// };

// const Home = () => {
//   const location  = useLocation();
//   const navigate  = useNavigate();
//   const searchQuery = new URLSearchParams(location.search).get('search') || '';
//   const { articles, loading, isMock } = useNews('general', searchQuery);

//   const [installPrompt, setInstallPrompt] = useState(window.__pwaInstallPrompt || null);
//   const [isInstalled,   setIsInstalled]   = useState(false);
//   const [showIOSGuide,  setShowIOSGuide]  = useState(false);
//   const [justInstalled, setJustInstalled] = useState(false);

//   const isIOS        = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//   const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

//   useEffect(() => {
//     if (isStandalone) setIsInstalled(true);
//     const onReady    = () => setInstallPrompt(window.__pwaInstallPrompt);
//     const onInstalled = () => { setIsInstalled(true); setJustInstalled(true); setInstallPrompt(null); };
//     window.addEventListener('pwaInstallReady', onReady);
//     window.addEventListener('pwaInstalled',    onInstalled);
//     window.addEventListener('appinstalled',    onInstalled);
//     return () => {
//       window.removeEventListener('pwaInstallReady', onReady);
//       window.removeEventListener('pwaInstalled',    onInstalled);
//       window.removeEventListener('appinstalled',    onInstalled);
//     };
//   }, []);

//   const handleInstall = async () => {
//     if (isInstalled || isStandalone) { alert('InsightNews is already installed! 🎉'); return; }
//     const prompt = installPrompt || window.__pwaInstallPrompt;
//     if (prompt) {
//       try {
//         await prompt.prompt();
//         const { outcome } = await prompt.userChoice;
//         if (outcome === 'accepted') { setIsInstalled(true); setJustInstalled(true); window.__pwaInstallPrompt = null; setInstallPrompt(null); }
//       } catch (e) { console.error(e); }
//       return;
//     }
//     if (isIOS) { setShowIOSGuide(true); return; }
//     alert('Install InsightNews:\n\n1. Chrome address bar mein ⊕ icon dekho\n2. Ya Browser menu → "Install InsightNews"\n\n💡 Mobile pe best experience milega!');
//   };

//   const heroArticle = articles[0];
//   const btnLabel = isInstalled || justInstalled ? '✅ Installed!' : '📲 Install App';

//   return (
//     <div style={{ background: '#FFFBF0', minHeight: '100vh' }}>
//       <style>{`
//         @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
//         @keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes slideUp{from{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes pop{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
//         .fade-in{animation:fadeIn 0.45s ease forwards}
//         .install-btn:hover{opacity:0.92;transform:translateY(-1px)}
//         .install-btn:active{transform:scale(0.97)}
//       `}</style>

//       {/* ===== iOS Guide Bottom Sheet ===== */}
//       {showIOSGuide && (
//         <div onClick={() => setShowIOSGuide(false)} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.65)',zIndex:9999,display:'flex',alignItems:'flex-end',justifyContent:'center' }}>
//           <div onClick={e => e.stopPropagation()} style={{ background:'#fff',borderRadius:'24px 24px 0 0',padding:'8px 0 48px',width:'100%',maxWidth:520,animation:'slideUp 0.35s ease',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)' }}>
//             <div style={{ width:40,height:4,background:'#e5e7eb',borderRadius:4,margin:'12px auto 20px' }}/>
//             <div style={{ padding:'0 24px' }}>
//               <div style={{ display:'flex',alignItems:'center',gap:14,marginBottom:28 }}>
//                 <img src="/icons/icon-192.png" alt="logo" style={{ width:52,height:52,borderRadius:12,objectFit:'cover',border:'2px solid #FFC107' }}/>
//                 <div>
//                   <h5 style={{ fontWeight:800,margin:'0 0 2px',color:'#111',fontSize:'1.05rem' }}>Install InsightNews</h5>
//                   <p style={{ margin:0,fontSize:12,color:'#999' }}>Add to iPhone Home Screen</p>
//                 </div>
//                 <button onClick={() => setShowIOSGuide(false)} style={{ marginLeft:'auto',background:'#f3f4f6',border:'none',borderRadius:'50%',width:34,height:34,fontSize:20,color:'#666',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>×</button>
//               </div>
//               {[
//                 { num:'1', emoji:'⬆️', title:'Tap the Share button',       sub:'Bottom of your Safari browser' },
//                 { num:'2', emoji:'📋', title:'Tap "Add to Home Screen"',    sub:'Scroll down in the share sheet' },
//                 { num:'3', emoji:'✅', title:'Tap "Add" to confirm',         sub:'InsightNews icon appears instantly!' },
//               ].map(({ num, emoji, title, sub }) => (
//                 <div key={num} style={{ display:'flex',gap:14,marginBottom:18,alignItems:'center' }}>
//                   <div style={{ width:38,height:38,borderRadius:'50%',flexShrink:0,background:BRAND.red,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:15 }}>{num}</div>
//                   <div>
//                     <p style={{ margin:'0 0 1px',fontWeight:700,fontSize:14,color:'#111' }}><span style={{ fontSize:16,marginRight:6 }}>{emoji}</span>{title}</p>
//                     <p style={{ margin:0,fontSize:12,color:'#999' }}>{sub}</p>
//                   </div>
//                 </div>
//               ))}
//               <div style={{ background:'#FEF9EE',border:'1px solid #FDE68A',borderRadius:12,padding:'12px 16px',marginTop:8 }}>
//                 <p style={{ margin:0,fontSize:12,color:'#92400E',lineHeight:1.6 }}>⚠️ <strong>Safari only.</strong> Chrome pe iOS mein PWA install nahi hota. Safari mein kholo fir install karo.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="container py-4">
//         {isMock && <MockBanner />}

//         {/* Search badge */}
//         {searchQuery && (
//           <div style={{ marginBottom:20 }}>
//             <span style={{ background:'#FEF3C7',color:'#92400E',padding:'6px 14px',borderRadius:20,fontSize:14,fontWeight:700,border:'1px solid #FDE68A' }}>
//               🔍 Search: "{searchQuery}"
//             </span>
//             <button onClick={() => navigate('/')} style={{ marginLeft:10,background:'none',border:'none',color:BRAND.red,cursor:'pointer',fontWeight:700,fontSize:13 }}>
//               ✕ Clear
//             </button>
//           </div>
//         )}

//         {/* ===== HERO ===== */}
//         {!searchQuery && (
//           <div className="row mb-5">
//             <div className="col-12">
//               <div style={{
//                 background: `linear-gradient(135deg, ${BRAND.black} 0%, ${BRAND.dark2} 45%, ${BRAND.red} 100%)`,
//                 borderRadius: 20,
//                 padding: 'clamp(28px,5vw,52px) clamp(20px,5vw,44px)',
//                 color: '#fff',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 boxShadow: `0 20px 60px rgba(155,28,28,0.35)`,
//                 border: `1px solid rgba(255,193,7,0.15)`,
//               }}>
//                 {/* Decorative yellow circle */}
//                 <div style={{ position:'absolute',top:-50,right:-50,width:220,height:220,borderRadius:'50%',background:'rgba(255,193,7,0.08)',pointerEvents:'none' }}/>
//                 <div style={{ position:'absolute',bottom:-60,left:-30,width:160,height:160,borderRadius:'50%',background:'rgba(255,193,7,0.05)',pointerEvents:'none' }}/>

//                 {/* Yellow top accent line */}
//                 <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${BRAND.yellow},${BRAND.red},${BRAND.yellow})`,borderRadius:'20px 20px 0 0' }}/>

//                 <span style={{ background:BRAND.yellow,color:BRAND.black,padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:800,letterSpacing:1,display:'inline-block' }}>
//                   ● LIVE
//                 </span>

//                 {loading ? (
//   <>
//     <div style={{ height: 32, background: 'rgba(255,255,255,0.15)', borderRadius: 8, marginTop: 16, marginBottom: 10, width: '68%' }} />
//     <div style={{ height: 16, background: 'rgba(255,255,255,0.1)', borderRadius: 6, width: '48%', marginBottom: 28 }} />
//     <div style={{ height: 46, background: 'rgba(255,255,255,0.08)', borderRadius: 30, width: 190 }} />
//   </>
// ) : heroArticle && (
//   <>
//     <h1 style={{ fontWeight: 800, marginTop: 14, lineHeight: 1.22, fontSize: 'clamp(1.3rem,3.5vw,2.1rem)', position: 'relative', color: '#fff' }}>
//       Dream First: India's Leading News Platform
//     </h1>
//     <p style={{ opacity: 0.82, maxWidth: 640, fontSize: 'clamp(0.88rem,2vw,1rem)', lineHeight: 1.65, position: 'relative', marginBottom: 26, color: 'rgba(255,255,255,0.85)' }}>
//       The right news, first. Dream First keeps you updated on every major development in the world. Now get all the latest news on politics, sports, and technology, all in one place.
//     </p>

//     <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', position: 'relative' }}>
//       <Link to="/stories"
//         style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFC107', color: '#111', borderRadius: 50, padding: '12px 26px', fontWeight: 800, fontSize: '0.92rem', textDecoration: 'none' }}
//         onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
//         onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
//         📖 Read Story
//       </Link>
//       <button className="install-btn"
//         onClick={handleInstall}
//         style={{
//           display: 'inline-flex', alignItems: 'center', gap: 8,
//           background: isInstalled ? 'rgba(34,197,94,0.2)' : 'rgba(255,193,7,0.12)',
//           color: '#fff', borderRadius: 50, padding: '11px 26px', fontWeight: 700, fontSize: '0.92rem',
//           border: isInstalled ? '2px solid rgba(34,197,94,0.5)' : `2px solid rgba(255,193,7,0.5)`,
//           cursor: 'pointer', transition: 'all 0.2s', animation: justInstalled ? 'pop 0.4s ease' : 'none', flexShrink: 0,
//         }}>
//         {btnLabel}
//       </button>
//     </div>
//     <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5, position: 'relative', letterSpacing: 0.2 }}>
//       {isInstalled ? '🎉 Dream First installed hai aapke device pe!'
//         : installPrompt ? '👆 Install App dabao — seedha install ho jayega!'
//         : isIOS ? '📱 Safari → Share ⬆️ → Add to Home Screen'
//         : '💡 Chrome address bar mein ⊕ icon dekhein'}
//     </p>
//   </>
// )}
//               </div>            </div>
//           </div>
//         )}

//         {/* Section heading */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold m-0" style={{ fontSize:'1.3rem',color:BRAND.black }}>
//             {searchQuery ? `Results for "${searchQuery}"` : 'Latest Stories'}
//           </h2>
//           <div style={{ height:2,background:'rgba(155,28,28,0.1)',flex:1,margin:'0 16px' }}/>
//           <span style={{ fontSize:13,color:'#999',whiteSpace:'nowrap' }}>
//             {loading ? 'Loading...' : `${articles.length} articles`}
//           </span>
//         </div>

//         {/* Grid */}
//         <div className="row g-4">
//   {loading
//     ? Array.from({ length: 6 }).map((_, i) => (
//         <div key={i} className="col-md-4 col-sm-6">
//           <SkeletonCard />
//         </div>
//       ))
//     : (Array.isArray(articles) ? articles : [])
//         .slice(0, searchQuery ? articles.length : 3)
//         .map((article, i) => (
//           <div
//             key={article.url || i}
//             className="col-md-4 col-sm-6 fade-in"
//             style={{ animationDelay: `${i * 0.05}s` }}
//           >
//             <NewsCard article={article} />
//           </div>
//         ))}
// </div>

//         {!loading && articles.length===0 && (
//           <div className="text-center py-5">
//             <p style={{ fontSize:48 }}>🔍</p>
//             <h4 style={{ color:'#6b7280' }}>No results for "{searchQuery}"</h4>
//             <button onClick={() => navigate('/')} className="btn btn-custom mt-3" style={{ borderRadius:20,padding:'10px 24px',fontWeight:700 }}>
//               Back to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useNews } from '../hooks/useNews';
import { NewsCard, SkeletonCard } from '../Component/NewsCard';

const Home = () => {
  const location   = useLocation();
  const navigate   = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('search') || '';
  const { articles, loading, isMock } = useNews('general', searchQuery);

  // PWA install state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled]           = useState(false);
  const [btnText, setBtnText]               = useState('📲 Install App');

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    // Already running as installed PWA?
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setInstalled(true);
      setBtnText('✅ Installed');
      return;
    }

    // Capture beforeinstallprompt — this is the key event
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Also store globally (set by index.html too)
      window.__pwaInstallPrompt = e;
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Also check if index.html already captured it
    if (window.__pwaInstallPrompt) {
      setDeferredPrompt(window.__pwaInstallPrompt);
    }

    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setBtnText('✅ Installed');
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    // ── Case 1: Already installed ──
    if (installed || window.matchMedia('(display-mode: standalone)').matches) {
      setBtnText('✅ Already Installed!');
      setTimeout(() => setBtnText('✅ Installed'), 2000);
      return;
    }

    // ── Case 2: Android/Chrome/Edge — native PWA install ──
    const prompt = deferredPrompt || window.__pwaInstallPrompt;
    if (prompt) {
      setBtnText('⏳ Installing...');
      try {
        await prompt.prompt();
        const { outcome } = await prompt.userChoice;
        if (outcome === 'accepted') {
          setInstalled(true);
          setBtnText('✅ Installed!');
          window.__pwaInstallPrompt = null;
          setDeferredPrompt(null);
        } else {
          setBtnText('📲 Install App');
        }
      } catch {
        setBtnText('📲 Install App');
      }
      return;
    }

    // ── Case 3: iOS Safari — show bottom sheet guide ──
    if (isIOS) {
      setShowIOS(true);
      return;
    }

    // ── Case 4: Desktop Chrome — prompt not fired yet ──
    // This means either: not visited enough, or already installed
    // Try triggering via chrome's install flow
    setBtnText('🔄 Check browser...');
    setTimeout(() => {
      setBtnText('📲 Install App');
      // Show a subtle hint — NOT an alert
      setShowDesktopHint(true);
      setTimeout(() => setShowDesktopHint(false), 4000);
    }, 1000);
  };

  const [showIOS, setShowIOS]               = useState(false);
  const [showDesktopHint, setShowDesktopHint] = useState(false);

  const heroArticle = articles[0];

  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh' }}>
      <style>{`
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .fade-in{animation:fadeInUp 0.4s ease forwards}
        .hint-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111;color:#FFC107;padding:12px 24px;border-radius:30px;font-size:13px;font-weight:700;border:1px solid rgba(255,193,7,0.3);z-index:9998;white-space:nowrap;animation:slideUp 0.3s ease}
      `}</style>

      {/* Desktop install hint toast — no alert */}
      {showDesktopHint && (
        <div className="hint-toast">
          💡 Click the ⊕ icon near the Chrome address bar → Install
        </div>
      )}

      {/* iOS Install Bottom Sheet */}
      {showIOS && (
        <div onClick={() => setShowIOS(false)} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:9999,display:'flex',alignItems:'flex-end',justifyContent:'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background:'#fff',borderRadius:'24px 24px 0 0',padding:'20px 24px 44px',width:'100%',maxWidth:520,animation:'slideUp 0.3s ease',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ width:40,height:4,background:'#e5e7eb',borderRadius:4,margin:'0 auto 20px' }}/>
            <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:24 }}>
              <img src="/icons/icon-192.png" alt="" style={{ width:52,height:52,borderRadius:12,border:'2px solid #FFC107' }} onError={e=>e.target.style.display='none'}/>
              <div>
                <strong style={{ fontSize:'1rem',color:'#111',display:'block' }}>Install Dream First News</strong>
                <span style={{ fontSize:12,color:'#999' }}>Add to iPhone Home Screen</span>
              </div>
              <button onClick={() => setShowIOS(false)} style={{ marginLeft:'auto',background:'#f3f4f6',border:'none',borderRadius:'50%',width:32,height:32,fontSize:20,cursor:'pointer',color:'#555',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>×</button>
            </div>
            {[
              ['1','⬆️','Tap Share button','Bottom of Safari browser'],
              ['2','📋','Tap "Add to Home Screen"','Scroll down in share sheet'],
              ['3','✅','Tap "Add"','App icon appears on home screen!'],
            ].map(([n,e,t,s]) => (
              <div key={n} style={{ display:'flex',gap:14,marginBottom:18,alignItems:'center' }}>
                <div style={{ width:36,height:36,borderRadius:'50%',background:'#9B1C1C',color:'#FFC107',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,flexShrink:0 }}>{n}</div>
                <div><p style={{ margin:'0 0 2px',fontWeight:700,fontSize:14,color:'#111' }}><span style={{ fontSize:16,marginRight:6 }}>{e}</span>{t}</p><p style={{ margin:0,fontSize:12,color:'#999' }}>{s}</p></div>
              </div>
            ))}
            <div style={{ background:'#FEF9EE',border:'1px solid rgba(255,193,7,0.4)',borderRadius:12,padding:'10px 14px',marginTop:4 }}>
              <p style={{ margin:0,fontSize:12,color:'#92400e' }}>⚠️ Safari browser pe hi kaam karta hai. Chrome pe nahi.</p>
            </div>
          </div>
        </div>
      )}

      <div className="container py-4">
        {isMock && <MockBanner />}

        {searchQuery && (
          <div style={{ marginBottom:20 }}>
            <span style={{ background:'#FEF3C7',color:'#92400e',padding:'6px 14px',borderRadius:20,fontSize:14,fontWeight:700,border:'1px solid rgba(255,193,7,0.4)' }}>
              🔍 "{searchQuery}"
            </span>
            <button onClick={() => navigate('/')} style={{ marginLeft:10,background:'none',border:'none',color:'#9B1C1C',cursor:'pointer',fontWeight:700,fontSize:13 }}>
              ✕ Clear
            </button>
          </div>
        )}

        {/* HERO */}
        {!searchQuery && (
          <div className="row mb-5">
            <div className="col-12">
              <div style={{
                background:'linear-gradient(135deg,#111111 0%,#2D0A0A 45%,#9B1C1C 100%)',
                borderRadius:20, padding:'clamp(28px,5vw,52px) clamp(20px,5vw,44px)',
                color:'#fff', position:'relative', overflow:'hidden',
                boxShadow:'0 20px 60px rgba(155,28,28,0.35)',
                border:'1px solid rgba(255,193,7,0.15)',
              }}>
                <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(90deg,#FFC107,#9B1C1C,#FFC107)',borderRadius:'20px 20px 0 0' }}/>
                <div style={{ position:'absolute',top:-60,right:-60,width:240,height:240,borderRadius:'50%',background:'rgba(255,193,7,0.06)',pointerEvents:'none' }}/>

                <span style={{ background:'#FFC107',color:'#111',padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:800,letterSpacing:1,display:'inline-block' }}>● LIVE</span>

                {loading ? (
                  <>
                    <div style={{height:30,background:'rgba(255,255,255,0.15)',borderRadius:8,marginTop:16,width:'70%'}}/>
                    <div style={{height:16,background:'rgba(255,255,255,0.1)',borderRadius:6,width:'45%',marginTop:10,marginBottom:28}}/>
                    <div style={{height:46,background:'rgba(255,255,255,0.08)',borderRadius:30,width:180}}/>
                  </>
                ) : heroArticle && (
                  <>
                    <h1 style={{ fontWeight:800,marginTop:14,lineHeight:1.22,fontSize:'clamp(1.3rem,3.5vw,2rem)',color:'#fff' }}>
                      {heroArticle.title}
                    </h1>
                    <p style={{ opacity:0.78,maxWidth:620,fontSize:'clamp(0.88rem,2vw,1rem)',lineHeight:1.65,marginBottom:26 }}>
                      {heroArticle.description}
                    </p>
                    <div style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
                      {/* Read Story */}
                      <Link to="/stories"
                        style={{ display:'inline-flex',alignItems:'center',gap:8,background:'#FFC107',color:'#111',borderRadius:50,padding:'12px 26px',fontWeight:800,fontSize:'0.92rem',textDecoration:'none',transition:'opacity 0.2s' }}
                        onMouseEnter={e=>e.currentTarget.style.opacity='0.9'}
                        onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
                        📖 Read Story
                      </Link>

                      {/* Install App — real PWA install */}
                      <button
                        onClick={handleInstall}
                        style={{
                          display:'inline-flex',alignItems:'center',gap:8,
                          background: installed ? 'rgba(34,197,94,0.2)' : 'rgba(255,193,7,0.15)',
                          color:'#fff',borderRadius:50,padding:'12px 26px',fontWeight:700,fontSize:'0.92rem',
                          border: installed ? '2px solid rgba(34,197,94,0.5)' : '2px solid rgba(255,193,7,0.45)',
                          cursor:'pointer',transition:'all 0.2s',
                        }}
                        onMouseEnter={e=>{ if(!installed) e.currentTarget.style.background='rgba(255,193,7,0.28)'; }}
                        onMouseLeave={e=>{ if(!installed) e.currentTarget.style.background='rgba(255,193,7,0.15)'; }}>
                        {btnText}
                      </button>
                    </div>

                    {/* Hint text — only shows when prompt is ready */}
                    {deferredPrompt && !installed && (
                      <p style={{ marginTop:10,fontSize:11,opacity:0.5 }}>
                        👆 Click to install — browser install popup 
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Section heading */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0" style={{ fontSize:'1.3rem',color:'#111' }}>
            {searchQuery ? `Results for "${searchQuery}"` : 'Latest Stories'}
          </h2>
          <div style={{ height:2,background:'rgba(155,28,28,0.1)',flex:1,margin:'0 16px' }}/>
          <span style={{ fontSize:13,color:'#bbb',whiteSpace:'nowrap' }}>
            {loading ? 'Loading...' : `${articles.length} articles`}
          </span>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {loading
            ? Array.from({length:6}).map((_,i)=><div key={i} className="col-md-4 col-sm-6"><SkeletonCard/></div>)
            : articles.slice(searchQuery?0:1).map((article,i)=>(
                <div key={article.url||i} className="col-md-4 col-sm-6 fade-in" style={{animationDelay:`${i*0.05}s`}}>
                  <NewsCard article={article}/>
                </div>
              ))
          }
        </div>

        {!loading && articles.length===0 && (
          <div className="text-center py-5">
            <p style={{fontSize:48}}>🔍</p>
            <h4 style={{color:'#6b7280'}}>No results for "{searchQuery}"</h4>
            <button onClick={()=>navigate('/')} style={{background:'#9B1C1C',color:'#fff',borderRadius:20,padding:'10px 24px',border:'none',fontWeight:700,marginTop:12,cursor:'pointer'}}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;











// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { useNews } from '../hooks/useNews';
// import { NewsCard, SkeletonCard } from '../Component/NewsCard';

// // ── Direct ZIP download — no prompt, no alert ──
// const downloadApp = async () => {
//   try {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
//     document.head.appendChild(script);
//     await new Promise(r => { script.onload = r; });

//     const zip = new window.JSZip();
//     const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
// <title>Dream First News</title>
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
// <style>
//   body{font-family:Inter,sans-serif;background:#FFF8F0;margin:0}
//   .nav{background:#111;padding:14px 24px;display:flex;align-items:center;gap:12px;border-bottom:3px solid #FFC107}
//   .brand{color:#FFC107;font-weight:800;font-size:1.2rem}
//   .hero{background:linear-gradient(135deg,#111,#2D0A0A,#9B1C1C);color:#fff;padding:60px 32px;margin:24px;border-radius:20px}
//   .badge{background:#FFC107;color:#111;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:800;display:inline-block;margin-bottom:12px}
//   h1{font-weight:800;font-size:2rem;margin-bottom:10px}
//   .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:0 24px 40px}
//   .card{background:#fff;border-radius:14px;border:1px solid rgba(255,193,7,0.2);overflow:hidden}
//   .card-img{height:160px;background:linear-gradient(135deg,#111,#9B1C1C);display:flex;align-items:center;justify-content:center}
//   .card-body{padding:14px}
//   .card-title{font-weight:700;font-size:.9rem;color:#111;margin-bottom:6px}
//   .card-text{font-size:.8rem;color:#666}
//   .badge2{background:#111;color:#FFC107;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:800}
//   footer{background:#111;border-top:3px solid #FFC107;padding:32px 24px;text-align:center;color:rgba(255,255,255,.5);font-size:.82rem}
// </style>
// </head>
// <body>
// <div class="nav"><span class="brand">🔴 Dream First News</span></div>
// <div class="hero">
//   <span class="badge">● LIVE</span>
//   <h1>India's Biggest News Platform</h1>
//   <p style="opacity:.8">Breaking news, live updates, and in-depth analysis from across India and the world.</p>
//   <p style="font-size:.8rem;opacity:.5">Downloaded: ${new Date().toLocaleString('en-IN')}</p>
// </div>
// <h2 style="padding:0 24px 16px;font-weight:800;color:#111">Latest Stories</h2>
// <div class="grid">
// ${['India GDP grows 7.2% in Q1 2026 — Economy on strong footing',
//   'ISRO Gaganyaan mission successfully completes orbit — Historic for India',
//   'Sensex crosses 90,000 — Markets at all-time high',
//   'Neeraj Chopra breaks javelin world record at 92.3m',
//   'Jio launches 6G trials in Mumbai and Delhi',
//   'India qualifies for FIFA World Cup 2026 — Historic first'].map(t =>
//   `<div class="card"><div class="card-img"><span style="color:#FFC107;font-weight:800;font-size:.85rem;text-align:center;padding:10px">Dream First News</span></div>
//   <div class="card-body"><span class="badge2">Breaking</span><p class="card-title" style="margin-top:8px">${t}</p></div></div>`
// ).join('')}
// </div>
// <footer>© 2026 <strong style="color:#FFC107">Dream First News</strong>. All rights reserved. | Designed by Jasmin Ansari</footer>
// </body></html>`;

//     zip.file('DreamFirstNews/index.html', html);
//     zip.file('DreamFirstNews/README.txt', `Dream First News — Offline Snapshot\nDownloaded: ${new Date().toLocaleString('en-IN')}\n\nOpen DreamFirstNews/index.html in any browser to view offline.`);
//     const blob = await zip.generateAsync({ type: 'blob' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url; a.download = 'DreamFirstNews.zip';
//     document.body.appendChild(a); a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   } catch (e) { console.error(e); }
// };

// const Home = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchQuery = new URLSearchParams(location.search).get('search') || '';
//   const { articles, loading, isMock } = useNews('general', searchQuery);
//   const [downloading, setDownloading] = useState(false);

//   const heroArticle = articles[0];

//   const handleDownload = async () => {
//     setDownloading(true);
//     await downloadApp();
//     setDownloading(false);
//   };

//   return (
//     <div style={{ background: '#FFF8F0', minHeight: '100vh' }}>
//       <style>{`
//         @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
//         @keyframes fadeIn{from{opacity:0}to{opacity:1}}
//         @keyframes slideUp{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}
//         .fade-in{animation:fadeIn 0.4s ease forwards}
//       `}</style>

//       <div className="container py-4">
//         {isMock && <MockBanner />}

//         {searchQuery && (
//           <div style={{ marginBottom: 20 }}>
//             <span style={{ background: '#FEF3C7', color: '#92400e', padding: '6px 14px', borderRadius: 20, fontSize: 14, fontWeight: 700, border: '1px solid rgba(255,193,7,0.4)' }}>
//               🔍 "{searchQuery}"
//             </span>
//             <button onClick={() => navigate('/')} style={{ marginLeft: 10, background: 'none', border: 'none', color: '#9B1C1C', cursor: 'pointer', fontWeight: 700, fontSize: 13 }}>
//               ✕ Clear
//             </button>
//           </div>
//         )}

//         {/* ── HERO ── */}
//         {!searchQuery && (
//           <div className="row mb-5">
//             <div className="col-12">
//               <div style={{
//                 background: 'linear-gradient(135deg,#111111 0%,#2D0A0A 45%,#9B1C1C 100%)',
//                 borderRadius: 20, padding: 'clamp(28px,5vw,52px) clamp(20px,5vw,44px)',
//                 color: '#fff', position: 'relative', overflow: 'hidden',
//                 boxShadow: '0 20px 60px rgba(155,28,28,0.35)',
//                 border: '1px solid rgba(255,193,7,0.15)',
//               }}>
//                 <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(90deg,#FFC107,#9B1C1C,#FFC107)',borderRadius:'20px 20px 0 0' }}/>
//                 <div style={{ position:'absolute',top:-60,right:-60,width:240,height:240,borderRadius:'50%',background:'rgba(255,193,7,0.06)',pointerEvents:'none' }}/>

//                 <span style={{ background:'#FFC107',color:'#111',padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:800,letterSpacing:1,display:'inline-block' }}>● LIVE</span>

//                 {loading ? (
//                   <>
//                     <div style={{height:30,background:'rgba(255,255,255,0.15)',borderRadius:8,marginTop:16,width:'70%'}}/>
//                     <div style={{height:16,background:'rgba(255,255,255,0.1)',borderRadius:6,width:'45%',marginTop:10,marginBottom:28}}/>
//                     <div style={{height:46,background:'rgba(255,255,255,0.08)',borderRadius:30,width:180}}/>
//                   </>
//                 ) : heroArticle && (
//                   <>
//                     <h1 style={{ fontWeight:800,marginTop:14,lineHeight:1.22,fontSize:'clamp(1.3rem,3.5vw,2rem)',color:'#fff' }}>
//                       {heroArticle.title}
//                     </h1>
//                     <p style={{ opacity:0.78,maxWidth:620,fontSize:'clamp(0.88rem,2vw,1rem)',lineHeight:1.65,marginBottom:26 }}>
//                       {heroArticle.description}
//                     </p>
//                     <div style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
//                       {/* Read Story → /stories page */}
//                       <Link to="/stories"
//                         style={{ display:'inline-flex',alignItems:'center',gap:8,background:'#FFC107',color:'#111',borderRadius:50,padding:'12px 26px',fontWeight:800,fontSize:'0.92rem',textDecoration:'none' }}
//                         onMouseEnter={e=>e.currentTarget.style.opacity='0.9'}
//                         onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
//                         📖 Read Story
//                       </Link>
//                       {/* Download — direct ZIP download */}
//                       <button onClick={handleDownload} disabled={downloading}
//                         style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,193,7,0.15)',color:'#fff',borderRadius:50,padding:'12px 26px',fontWeight:700,fontSize:'0.92rem',border:'2px solid rgba(255,193,7,0.45)',cursor:'pointer',transition:'all 0.2s' }}
//                         onMouseEnter={e=>e.currentTarget.style.background='rgba(255,193,7,0.25)'}
//                         onMouseLeave={e=>e.currentTarget.style.background='rgba(255,193,7,0.15)'}>
//                         {downloading ? '⏳ Preparing...' : '⬇️ Download App'}
//                       </button>
//                     </div>
//                     <p style={{ marginTop:10,fontSize:11,opacity:0.45 }}>
//                       Click Download — ZIP file seedha download hogi
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Section heading */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold m-0" style={{ fontSize:'1.3rem',color:'#111' }}>
//             {searchQuery ? `Results for "${searchQuery}"` : 'Latest Stories'}
//           </h2>
//           <div style={{ height:2,background:'rgba(155,28,28,0.1)',flex:1,margin:'0 16px' }}/>
//           <span style={{ fontSize:13,color:'#bbb',whiteSpace:'nowrap' }}>
//             {loading ? 'Loading...' : `${articles.length} articles`}
//           </span>
//         </div>

//         {/* Grid */}
//         <div className="row g-4">
//           {loading
//             ? Array.from({length:6}).map((_,i)=><div key={i} className="col-md-4 col-sm-6"><SkeletonCard/></div>)
//             : articles.slice(searchQuery?0:1).map((article,i)=>(
//                 <div key={article.url||i} className="col-md-4 col-sm-6 fade-in" style={{animationDelay:`${i*0.05}s`}}>
//                   <NewsCard article={article}/>
//                 </div>
//               ))
//           }
//         </div>

//         {!loading && articles.length===0 && (
//           <div className="text-center py-5">
//             <p style={{fontSize:48}}>🔍</p>
//             <h4 style={{color:'#6b7280'}}>No results for "{searchQuery}"</h4>
//             <button onClick={()=>navigate('/')} style={{background:'#9B1C1C',color:'#fff',borderRadius:20,padding:'10px 24px',border:'none',fontWeight:700,marginTop:12,cursor:'pointer'}}>
//               Back to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

