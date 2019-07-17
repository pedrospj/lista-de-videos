import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import './ProviderLogin.css';

const GoogleIcon = () => <i className="fab fa-google brand-icons" />;

const GithubIcon = () => <i className="fab fa-github brand-icons" />;

const ProviderLogin = ({ disposeModal }) => {
  const dispatch = useDispatch();

  const googleLogin = event => {
    event.preventDefault();
    dispatch(actions.loginWithGoogle(disposeModal));
  };

  const githubLogin = event => {
    event.preventDefault();
    dispatch(actions.loginWithGithub(disposeModal));
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
      <button
        className="provider-button github-login-button"
        onClick={githubLogin}
      >
        <GithubIcon />
        Github
      </button>
    </div>
  );
};

export default ProviderLogin;
