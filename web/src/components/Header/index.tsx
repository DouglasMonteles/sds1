import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import imgLogo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="main-header">
      <img src={imgLogo} alt="Logo do sistema" />
      <Link to="/">
        <div className="logo-text">
          <span className="logo-text-1">Big Game</span>
          <span className="logo-text-2"> Survey</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;