import React from 'react';
import ProviderLogin from './ProviderLogin/ProviderLogin';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = props => {
  return (
    <form className="form">
      <h1 className="h1-title">Faça login ou Cadastre-se</h1>
      <div className="form-field">
        <label>Email:</label>
        <input type="email" className="login-input" />
      </div>

      <div className="form-field">
        <label>Senha:</label>
        <input type="password" className="login-input" />
      </div>

      <button className="login-form-button">Login</button>
      <p className="p-login">Faça login com:</p>
      <ProviderLogin />
      <p className="p-login">OU</p>
      <Link to="/cadastro" className="signup-link">
        Cadastre-se
      </Link>
    </form>
  );
};

export default LoginForm;
