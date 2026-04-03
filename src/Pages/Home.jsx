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