import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <p className="username">username</p>
      <h1>What's My Strain?</h1>
      <div className="nav-options">
        <p>Not For Me</p>
        <p>My Strains</p>
        <p>Login</p>
      </div>
    </header>
  );
};

export default Header;
