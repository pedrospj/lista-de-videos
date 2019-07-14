import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import './Login.css';

const Login = ({ show, disposeModal }) =>
  show ? (
    <>
      <div className="backdrop" onClick={() => disposeModal()}>
        <div className="login-container" onClick={e => e.stopPropagation()}>
          <button
            className="fas fa-times close-modal"
            onClick={() => disposeModal()}
          />
          <LoginForm />
        </div>
      </div>
    </>
  ) : null;

export default Login;
