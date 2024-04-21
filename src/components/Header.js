import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ isLoggedIn, onLogout, onLoginClick }) => {
  return (
    <header>
      <h1>To-Do App</h1>
      <div className="user-actions">
        {isLoggedIn ? (
          <button className="logout-button" onClick={onLogout}>
            <FaUser /> Logout
          </button>
        ) : (
          <button className="login-button" onClick={onLoginClick}>
            <FaUser /> Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;