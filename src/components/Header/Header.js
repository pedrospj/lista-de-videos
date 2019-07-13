import React, { useState } from 'react';
import { Login } from '../index';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [displayModal, setDisplayStatus] = useState(false);
  return (
    <>
      <header className="header">
        <Link to="/" className="header-title">
          LISTA DE VÍDEOS
        </Link>
        <button className="login-button" onClick={() => setDisplayStatus(true)}>
          FAZER LOGIN
        </button>
      </header>
      <hr />
      <Login show={displayModal} disposeModal={setDisplayStatus} />
    </>
  );
};

export default Header;
