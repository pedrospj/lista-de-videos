import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import './Login.css';

const Login = ({ show, disposeModal }) =>
  show ? (
    <div className="backdrop" onClick={() => disposeModal(false)}>
      <div className="login-container">
        <button
          className="fas fa-times close-modal"
          onClick={() => disposeModal(false)}
        />
        <LoginForm />
        <button className="google-login">Login com Google</button>
      </div>
    </div>
  ) : null;

export default Login;
