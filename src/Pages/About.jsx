import React from 'react';

const About = () => {
  return (
    <div style={{ background: '#FFF8F0', minHeight: '100vh', paddingBottom: 60 }}>

      {/* ── Hero Banner — Black → Yellow ── */}
      <div style={{
        background: 'linear-gradient(135deg, #111111 0%, #2D1A00 50%, #FFC107 100%)',
        padding: '50px 0 40px', marginBottom: 48,
        borderBottom: '3px solid #9B1C1C',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -50, right: -50, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div className="container">
          <span style={{ background: '#9B1C1C', color: '#FFC107', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            ℹ️ ABOUT US
          </span>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', marginTop: 14, marginBottom: 8 }}>
            About <span style={{ color: '#FFC107' }}>Dream First</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: 520, margin: 0 }}>
            Your trusted source for breaking news, deep analysis, and stories that matter.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{
          background: '#fff', borderRadius: 20,
          padding: 'clamp(24px,4vw,44px)',
          boxShadow: '0 4px 28px rgba(155,28,28,0.1)',
          border: '1px solid rgba(255,193,7,0.2)',
        }}>

          {/* Our Story */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#111', borderLeft: '4px solid #FFC107', paddingLeft: 14, marginBottom: 14 }}>
              Our Story
            </h2>
            <p style={{ color: '#4b5563', lineHeight: 1.85, margin: 0 }}>
              Dream First News was born out of a deep-seated passion for fearless journalism and a vision to redefine how information reaches the common citizen. In an era of rapid-fire headlines, we stand as a sanctuary for integrity and depth. We believe that access to accurate, unbiased information is not just a service, but a fundamental right. Our commitment is to deliver news that empowers, educates, and inspires, ensuring that every story we publish is anchored in truth and professional ethics.  <br />  <br />
              Deeply rooted in the vibrant spirit of Gujarat, Dream First News is more than just a digital platform; it is a bridge between local voices and global perspectives. We are dedicated to capturing the heartbeat of our communities—from the entrepreneurial energy of our cities to the rich cultural heritage of our rural heartlands. By combining modern technology with traditional storytelling, we strive to create a space where every Gujarati can find reliable updates and engaging stories that celebrate our identity and keep us connected to what truly matters.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,193,7,0.25)', margin: '0 0 32px' }} />

          {/* What We Offer */}
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: '1.3rem',
                color: '#111',
                borderLeft: '4px solid #9B1C1C',
                paddingLeft: 14,
                marginBottom: 24,
              }}
            >
              What We Offer
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img
                  src="src/assets/Ayodhya Mandir.jpeg"
                  alt="Offer 1"
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: 'contain', // 👈 shows full image
                    borderRadius: 16,

                  }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Ayodhya Mandir</h3>
                  <p style={{ margin: '8px 0', fontSize: '1rem' }}>5550 points required</p>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Premium membership required</p>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img
                  src="src/assets/Ajmer Shrif.jpeg"
                  alt="Offer 2"
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: 'contain', // 👈 shows full image
                    borderRadius: 16,
                  }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Ajmer Shrif Dargah</h3>
                  <p style={{ margin: '8px 0', fontSize: '1rem' }}>5550 points required</p>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Premium membership required</p>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img
                  src="src/assets/Status Of Unity.jpeg"
                  alt="Offer 3"
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: 'contain', // 👈 shows full image
                    borderRadius: 16,
                  }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Statue of Unity</h3>
                  <p style={{ margin: '8px 0', fontSize: '1rem' }}>4550 points required</p>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Premium membership required</p>
                </div>
              </div>
                    {/* image 4 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img
                  src="src/assets/Sawariya Mandir.png"
                  alt="Offer 2"
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: 'contain', // 👈 shows full image
                    borderRadius: 16,
                  }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Sawariya Mandir</h3>
                  <p style={{ margin: '8px 0', fontSize: '1rem' }}>5550 points required</p>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Premium membership required</p>
                </div>
              </div>


            </div>
          </div>








          <div style={{ borderTop: '1px solid rgba(255,193,7,0.25)', margin: '0 0 32px' }} />

          {/* Contact */}
          <div style={{
            background: 'linear-gradient(135deg, #111111 0%, #2D1A00 60%, #FFC107 100%)',
            borderRadius: 16, padding: 28,
            borderLeft: '4px solid #9B1C1C',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,193,7,0.08)', pointerEvents: 'none' }} />
            <h2 style={{ color: '#FFC107', fontWeight: 800, fontSize: '1.2rem', marginBottom: 6 }}>Contact Us</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 22, fontSize: '0.9rem' }}>
              Questions or feedback? We'd love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📧', label: 'Email', value: 'contact.dreamfirst@gmail.com', href: 'mailto:contact.dreamfirst@gmail.com' },
                { icon: '📞', label: 'Phone', value: '9898916410', href: 'tel:+9898916410' },
                { icon: '📍', label: 'Address', value: '16/Rajsmruti,Bherampura,Ahemdabad,Gujarat-380022', href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,193,7,0.15)', border: '1px solid rgba(255,193,7,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 1 }}>{label}</span>
                    {href
                      ? <a href={href} style={{ color: '#FFC107', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>{value}</a>
                      : <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default About;
