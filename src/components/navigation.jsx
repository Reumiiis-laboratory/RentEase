import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const handleLinkClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  // SVG path for hamburger and X icons
  const hamburgerPath = 'M4 6h16M4 12h16M4 18h16';
  const closePath = 'M6 18L18 6M6 6l12 12';

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo-container">
            <a href="#home" className="logo-link" onClick={() => handleLinkClick('home')}>
              RentEase
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu" id="desktop-menu">
            {['home', 'vehicles', 'about', 'contact', 'login', 'signup'].map((page) => (
              <a
                key={page}
                href={`#${page}`}
                className={`nav-link ${activePage === page ? 'active' : ''}`}
                onClick={() => handleLinkClick(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? closePath : hamburgerPath}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
          {['home', 'vehicles', 'about', 'contact', 'login', 'signup'].map((page) => (
            <a
              key={page}
              href={`#${page}`}
              className="nav-link block px-3 py-2"
              onClick={() => handleLinkClick(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
