import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => (
  <header className="Dashboard-header">
    <Logo />
    <div>Search Bar</div>
    <div>hamburger Menu</div>
  </header>
);

export default Header;
