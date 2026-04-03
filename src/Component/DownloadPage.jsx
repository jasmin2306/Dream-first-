import React from 'react';

const DownloadPage = () => {
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

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Image Downloader</h2>
      <button 
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Download Image
      </button>
    </div>
  );
};

export default DownloadPage;