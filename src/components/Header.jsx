
import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile nav toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isSolid ? 'solid' : 'transparent'}`}>
      <div className="logo-container">
        <a href="#index"><img src="/logo.png" alt="Event Logo" className="logo" /></a>
      </div>
      <div className="logo-container">
        <img src="/partner-logo.png" alt="Partner Logo" className="partner-logo" />
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`navItems ${isNavOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#register">Register</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

