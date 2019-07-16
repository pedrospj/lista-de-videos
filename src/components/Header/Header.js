import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../index';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import './Header.css';

const Header = () => {
  const [displayModal, setDisplayStatus] = useState(false);
  const logged = useSelector(state => state.auth.userEmail);

  const setHiddenTrue = () => {
    setDisplayStatus(false);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="header-title">
          LISTA DE VÍDEOS
        </Link>
        {logged ? (
          <UserInfo />
        ) : (
          <button
            className="login-button"
            onClick={() => setDisplayStatus(true)}
          >
            FAZER LOGIN
          </button>
        )}
      </header>
      <hr />
      <Login show={displayModal} disposeModal={setHiddenTrue} />
    </>
  );
};

export default Header;
