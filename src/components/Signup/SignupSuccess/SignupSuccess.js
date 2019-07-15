import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupSuccess.css';

const CheckIcon = () => <i className="fas fa-check-circle check-icon" />;

const SignupSuccess = props => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-success-container">
      <CheckIcon />
      <p className="p1-signup-success">Cadastro realizado com sucesso!</p>
      <p>Você será redirecionado para a Página Inicial.</p>
    </div>
  );
};

export default SignupSuccess;
