import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  return (
    <header>
      <p className="username">{user ? `Welcome, ${user}` : ''}</p>
      <h1>What's My Strain?</h1>
      <div className="nav-options">
        <p>Not For Me</p>
        <p>My Strains</p>
        <Link to="/login">{user ? 'Logout' : 'Login'}</Link>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
