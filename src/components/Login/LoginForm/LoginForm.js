import React from 'react';
import './LoginForm.css';

const LoginForm = props => (
  <form className="form">
    <div className="form-field">
      <label>Email:</label>
      <input type="email" className="login-input" />
    </div>
    <div className="form-field">
      <label>Senha:</label>
      <input type="password" className="login-input" />
    </div>
    <button className="login-form-button">Login</button>
  </form>
);

export default LoginForm;
