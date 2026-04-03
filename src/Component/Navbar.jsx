import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [searchVal, setSearchVal] = useState('');
  const navigate   = useNavigate();
  const location   = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/?search=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal('');
    }
  };

  const links = [
    { to: '/',           label: 'Home' },
    { to: '/business',   label: 'Business' },
    { to: '/technology', label: 'Technology' },
    { to: '/sports',     label: 'Sports' },
    { to: '/stories',    label: 'Stories' },
    { to: '/about',      label: 'About' },
  ];

  return (
    <>
      <style>{`
        /* ✅ Navbar always solid black — scroll pe transparent nahi hoga */
        .in-navbar {
          background: #111111 !important;
          border-bottom: 3px solid #FFC107 !important;
          box-shadow: 0 2px 16px rgba(0,0,0,0.4) !important;
          /* opacity aur backdrop filter hatao completely */
          opacity: 1 !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        /* ✅ Nav links — original tab hover style (bottom border underline) */
        .in-nav-link {
          color: rgba(255,255,255,0.78) !important;
          font-weight: 500;
          font-size: 0.91rem;
          padding: 8px 14px !important;
          border-bottom: 3px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          border-radius: 0 !important;
          text-decoration: none !important;
          display: inline-block;
        }
        .in-nav-link:hover {
          color: #FFC107 !important;
          border-bottom: 3px solid #FFC107 !important;
          background: transparent !important;
        }
        .in-nav-link.active-link {
          color: #FFC107 !important;
          border-bottom: 3px solid #FFC107 !important;
          font-weight: 700 !important;
        }

        /* Search input */
        .in-search-input {
          background: rgba(255,255,255,0.09) !important;
          border: 1.5px solid rgba(255,193,7,0.35) !important;
          color: #fff !important;
          border-radius: 20px !important;
          font-size: 0.87rem;
          padding: 6px 14px;
        }
        .in-search-input::placeholder { color: rgba(255,255,255,0.4) !important; }
        .in-search-input:focus {
          outline: none;
          border-color: #FFC107 !important;
          box-shadow: 0 0 0 3px rgba(255,193,7,0.18) !important;
          background: rgba(255,255,255,0.13) !important;
        }

        /* Search button */
        .in-search-btn {
          background: #FFC107 !important;
          color: #111 !important;
          border: none !important;
          border-radius: 20px !important;
          font-weight: 700;
          font-size: 0.87rem;
          padding: 6px 18px;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.2s;
        }
        .in-search-btn:hover { background: #e6ac00 !important; }

        /* Hamburger icon */
        .in-navbar .navbar-toggler {
          border: 1.5px solid rgba(255,193,7,0.5) !important;
          padding: 4px 8px;
        }
        .in-navbar .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255%2C193%2C7%2C0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg sticky-top in-navbar" style={{ height: 68 }}>
        <div className="container-fluid px-3 px-md-4">

          {/* ── Brand Logo ── */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <img
              src="/public/icon-192.png"
              alt="Dream First"
              style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover', border: '2px solid #FFC107' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <span style={{ color: '#FFC107', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>
              Dream First
            </span>
          </Link>

          {/* ── Hamburger ── */}
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#inNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="inNavbar">
            {/* ── Nav Links ── */}
            <ul className="navbar-nav mx-auto" style={{ gap: 2 }}>
              {links.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={to} className="nav-item">
                    <Link
                      to={to}
                      className={`in-nav-link${isActive ? ' active-link' : ''}`}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Search ── */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, maxWidth: 300 }}>
              <input
                className="in-search-input"
                type="search"
                placeholder="Search news..."
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
              />
              <button type="submit" className="in-search-btn">Search</button>
            </form>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
