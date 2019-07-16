import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import './ProviderLogin.css';

const GoogleIcon = () => <i className="fab fa-google brand-icons" />;

const FacebookIcon = () => <i className="fab fa-facebook-square brand-icons" />;

const ProviderLogin = ({ disposeModal }) => {
  const dispatch = useDispatch();
  const googleLogin = event => {
    event.preventDefault();
    dispatch(actions.loginWithGoogle(disposeModal));
  };

  return (
    <div className="provider-login">
      <button
        className="provider-button google-login-button"
        onClick={googleLogin}
      >
        <GoogleIcon />
        Google
      </button>
      <button className="provider-button facebook-login-button">
        <FacebookIcon />
        Facebook
      </button>
    </div>
  );
};

export default ProviderLogin;
