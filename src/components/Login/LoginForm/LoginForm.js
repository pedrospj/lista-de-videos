import React from 'react';
import { Formik, Form } from 'formik';
import { FormField, FormButton } from '../../Elements/index';
import * as Yup from 'yup';
import ProviderLogin from './ProviderLogin/ProviderLogin';
import { Link } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
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
  const loginError = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={values => {
          dispatch(
            actions.loginWithEmailAndPassword({
              ...values,
              disposeModal: disposeModal
            })
          );
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form className="form">
            <h1 className="h1-title">Faça login ou Cadastre-se</h1>

            <FormField
              fieldName="email"
              label="Email:"
              fieldType="email"
              fieldPlaceholder="Digite seu email"
              error={errors.email}
              touched={touched.email}
            />
            <FormField
              fieldName="password"
              label="Senha:"
              fieldType="password"
              fieldPlaceholder="Digite sua senha"
              error={errors.password}
              touched={touched.password}
            />

            {loginError ? (
              <div className="login-user-error">
                Usuário ou senha incorretos
              </div>
            ) : null}

            <FormButton isFormValid={isValid}>Login</FormButton>

            <p className="p-login">Faça login com:</p>
            <ProviderLogin disposeModal={disposeModal} />

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
