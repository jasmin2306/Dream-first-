import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert(`🎉 Thank you for subscribing!\nNews will be sent to: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const linkStyle = {
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    fontSize: '0.88rem',
    transition: 'color 0.2s',
    display: 'inline-block',
  };

  return (
    <footer style={{
      background: '#111111',
      borderTop: '3px solid #FFC107',
      marginTop: 'auto',
    }}>
      <div className="container" style={{ padding: '48px 24px 24px' }}>
        <div className="row gy-4">

          {/* ── Brand Column ── */}
          <div className="col-lg-4 col-md-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <img
                src="public\icon-192.png"
                alt="Dream First"
                style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', border: '2px solid #FFC107' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div>
                <span style={{ color: '#FFC107', fontWeight: 800, fontSize: '1.15rem', display: 'block', lineHeight: 1.2 }}>
                  Dream First
                </span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>Your trust, our identity</span>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.75, marginBottom: 18 }}>
              Breaking news from India and around the world — accurate, fast, and trustworthy.
            </p>

            {/* Social icons */}
           
          </div>

          {/* ── Explore ── */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 style={{ color: '#FFC107', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
              Explore
            </h5>
            <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'Home'], ['/business', 'Business'], ['/technology', 'Technology'], ['/sports', 'Sports'], ['/stories', 'Stories']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} style={linkStyle}
                    onMouseEnter={e => { e.target.style.color = '#FFC107'; e.target.style.paddingLeft = '5px'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.paddingLeft = '0'; }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Support ── */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 style={{ color: '#FFC107', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
              Support
            </h5>
            <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['about', 'About Us'], ['contact', 'Contact'], ['privacy', 'Privacy Policy'], ['terms', 'Terms of Service']].map(([path, label]) => (
                <li key={path}>
                  <Link to={`/${path}`} style={linkStyle}
                    onMouseEnter={e => { e.target.style.color = '#FFC107'; e.target.style.paddingLeft = '5px'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.paddingLeft = '0'; }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div className="col-lg-4 col-md-6">
            <h5 style={{ color: '#FFC107', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
              Newsletter
            </h5>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.84rem', marginBottom: 16, lineHeight: 1.6 }}>
              Get the latest headlines delivered straight to your inbox every morning.
            </p>
            <form onSubmit={handleSubscribe}>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1, borderRadius: 20,
                    border: '1.5px solid rgba(255,193,7,0.25)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff', padding: '9px 16px',
                    fontSize: '0.84rem', outline: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = '#FFC107'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,193,7,0.25)'}
                />
                <button type="submit" style={{
                  background: '#FFC107', color: '#111111',
                  border: 'none', borderRadius: 20,
                  padding: '9px 20px', fontWeight: 800,
                  fontSize: '0.84rem', cursor: 'pointer',
                  transition: 'background 0.2s', whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => e.target.style.background = '#e6ac00'}
                  onMouseLeave={e => e.target.style.background = '#FFC107'}>
                  Subscribe
                </button>
              </div>
            </form>

            {/* Mini trust badges */}
            <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
              {[
                { icon: 'bi-shield-check', text: 'No spam' },
                { icon: 'bi-bell', text: 'Daily digest' },
                { icon: 'bi-x-circle', text: 'Unsubscribe anytime' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <i className={`bi ${icon}`} style={{ color: '#FFC107', fontSize: 12 }} />
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: '1px solid rgba(255,193,7,0.15)', margin: '36px 0 20px' }} />

        {/* ── Bottom bar ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Dream First</strong>. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            Designed with <span style={{ color: '#9B1C1C' }}>❤️</span> by <strong style={{ color: '#FFC107' }}>Jasmin Ansari</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SOCIALS = [
//   { label: 'Facebook',  url: 'https://facebook.com',  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
//   { label: 'Twitter/X', url: 'https://x.com',         svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
//   { label: 'Instagram', url: 'https://instagram.com', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
//   { label: 'LinkedIn',  url: 'https://linkedin.com',  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
//   { label: 'YouTube',   url: 'https://youtube.com',   svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/></svg> },
// ];

// const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email && email.includes('@')) {
//       alert(`🎉 Subscribed! News will be sent to: ${email}`);
//       setEmail('');
//     } else {
//       alert('Please enter a valid email.');
//     }
//   };

//   const linkStyle = { color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', transition: 'all 0.2s', display: 'inline-block' };

//   return (
//     <footer style={{ background: '#111111', borderTop: '3px solid #FFC107', marginTop: 'auto' }}>
//       <div className="container" style={{ padding: '48px 24px 24px' }}>
//         <div className="row gy-4">

//           {/* Brand */}
//           <div className="col-lg-4 col-md-6">
//             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
//               <img src="/icons/icon-192.png" alt="Dream First" style={{ width: 46, height: 46, borderRadius: 10, objectFit: 'cover', border: '2px solid #FFC107' }} onError={e => e.target.style.display = 'none'} />
//               <div>
//                 <span style={{ color: '#FFC107', fontWeight: 800, fontSize: '1.1rem', display: 'block', lineHeight: 1.2 }}>Dream First News</span>
//                 <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem' }}>Your trust, our identity</span>
//               </div>
//             </div>
//             <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.75, marginBottom: 18 }}>
//               Breaking news from India and around the world — accurate, fast, and trustworthy.
//             </p>
//             {/* Social icons with real SVGs */}
//             <div style={{ display: 'flex', gap: 10 }}>
//               {SOCIALS.map(({ label, url, svg }) => (
//                 <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label}
//                   style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.2s' }}
//                   onMouseEnter={e => { e.currentTarget.style.background = '#FFC107'; e.currentTarget.style.color = '#111'; e.currentTarget.style.borderColor = '#FFC107'; }}
//                   onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,193,7,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,193,7,0.2)'; }}>
//                   {svg}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Explore */}
//           <div className="col-lg-2 col-md-3 col-6">
//             <h5 style={{ color: '#FFC107', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Explore</h5>
//             <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//               {[['/', 'Home'], ['/business', 'Business'], ['/technology', 'Technology'], ['/sports', 'Sports'], ['/stories', 'Stories']].map(([to, label]) => (
//                 <li key={to}>
//                   <Link to={to} style={linkStyle}
//                     onMouseEnter={e => { e.target.style.color = '#FFC107'; e.target.style.paddingLeft = '5px'; }}
//                     onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.paddingLeft = '0'; }}>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support */}
//           <div className="col-lg-2 col-md-3 col-6">
//             <h5 style={{ color: '#FFC107', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Support</h5>
//             <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//               {[['about', 'About Us'], ['contact', 'Contact'], ['privacy', 'Privacy Policy'], ['terms', 'Terms of Service']].map(([path, label]) => (
//                 <li key={path}>
//                   <Link to={`/${path}`} style={linkStyle}
//                     onMouseEnter={e => { e.target.style.color = '#FFC107'; e.target.style.paddingLeft = '5px'; }}
//                     onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.paddingLeft = '0'; }}>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="col-lg-4 col-md-6">
//             <h5 style={{ color: '#FFC107', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Newsletter</h5>
//             <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.84rem', marginBottom: 14, lineHeight: 1.6 }}>
//               Get top headlines delivered every morning.
//             </p>
//             <form onSubmit={handleSubscribe}>
//               <div style={{ display: 'flex', gap: 8 }}>
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" required
//                   style={{ flex: 1, borderRadius: 20, border: '1.5px solid rgba(255,193,7,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '9px 16px', fontSize: '0.84rem', outline: 'none' }}
//                   onFocus={e => e.target.style.borderColor = '#FFC107'}
//                   onBlur={e => e.target.style.borderColor = 'rgba(255,193,7,0.25)'} />
//                 <button type="submit" style={{ background: '#FFC107', color: '#111', border: 'none', borderRadius: 20, padding: '9px 18px', fontWeight: 800, fontSize: '0.84rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
//                   onMouseEnter={e => e.target.style.background = '#e6ac00'}
//                   onMouseLeave={e => e.target.style.background = '#FFC107'}>
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//             <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
//               {['No spam', 'Daily digest', 'Unsubscribe anytime'].map(t => (
//                 <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.38)', fontSize: '0.72rem' }}>
//                   <span style={{ color: '#FFC107', fontSize: 10 }}>✓</span> {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div style={{ borderTop: '1px solid rgba(255,193,7,0.15)', margin: '36px 0 20px' }} />

//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//           <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
//             © 2026 <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Dream First News</strong>. All rights reserved.
//           </p>
//           <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
//             Designed with <span style={{ color: '#9B1C1C' }}>❤️</span> by <strong style={{ color: '#FFC107' }}>Jasmin Ansari</strong>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
