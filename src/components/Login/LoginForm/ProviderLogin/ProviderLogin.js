import React from 'react';
import './ProviderLogin.css';

const GoogleIcon = () => <i className="fab fa-google brand-icons" />;

const FacebookIcon = () => <i className="fab fa-facebook-square brand-icons" />;

const ProviderLogin = props => (
  <div className="provider-login">
    <button className="provider-button google-login-button">
      <GoogleIcon />
      Google
    </button>
    <button className="provider-button facebook-login-button">
      <FacebookIcon />
      Facebook
    </button>
  </div>
);

export default ProviderLogin;
