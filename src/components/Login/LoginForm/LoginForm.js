import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ProviderLogin from './ProviderLogin/ProviderLogin';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter ao menos 6 caracteres')
    .required('Campo obrigatório')
});

const LoginForm = ({ disposeModal }) => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form className="form">
            <h1 className="h1-title">Faça login ou Cadastre-se</h1>
            <label className="login-modal-label">Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Digite seu email"
              className={errors.email ? 'login-input-error' : 'login-input'}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="login-error-message"
            />

            <label className="login-modal-label">Senha:</label>
            <Field
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className={errors.password ? 'login-input-error' : 'login-input'}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="login-error-message"
            />

            <button
              type="submit"
              className={
                isValid ? 'login-form-button' : 'login-form-button-disabled'
              }
              disabled={!isValid}
            >
              Login
            </button>

            <p className="p-login">Faça login com:</p>
            <ProviderLogin />

            <p className="p-login">OU</p>
            <Link
              to="/cadastro"
              className="signup-link"
              onClick={() => disposeModal()}
            >
              Cadastre-se
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
