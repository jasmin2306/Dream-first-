import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Sport from './Component/Sport'
import Stories from './Component/Stories'
import Business from './Component/Business'
import Tech from './Component/Tech'
import DownloadPage from './Component/DownloadPage'
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/technology" element={<Tech />} />
            <Route path="/sports" element={<Sport />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
