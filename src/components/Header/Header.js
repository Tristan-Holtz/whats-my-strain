import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory } from '../../actions';

const Header = ({ user, setCategory }) => {
  return (
    <header>
      <p className="username">{user ? `Welcome, ${user}` : ''}</p>
      <h1>What's My Strain?</h1>
      <div className="nav-options">
        <Link
          className="nav-link"
          to="/strains"
          onClick={() => setCategory('favorites')}
        >
          My Strains
        </Link>
        <Link
          className="nav-link"
          to="/strains"
          onClick={() => setCategory('dislikes')}
        >
          Not For Me
        </Link>
        <Link className="nav-link" to="/login">
          {user ? 'Logout' : 'Login'}
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setCategory: category => {
    dispatch(setCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
