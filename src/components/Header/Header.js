import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <>
    <header className="header">
      <Link to="/" className="header-title">
        LISTA DE VÍDEOS
      </Link>
      <button className="login-button">FAZER LOGIN</button>
    </header>
    <hr />
  </>
);

export default Header;
