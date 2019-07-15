import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignupSuccess from './SignupSuccess/SignupSuccess';
import './Signup.css';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter ao menos 6 caracteres')
    .required('Campo obrigatório')
});

const Signup = props => {
  const dispatch = useDispatch();
  const redirect = useSelector(state => state.redirect);

  if (redirect) {
    return <SignupSuccess />;
  }

  return (
    <div className="signup-container">
      <h1 className="h1-signup">Cadastro</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => dispatch(actions.signup(values))}
      >
        {({ errors, touched, isValid, ...rest }) => (
          <Form className="signup-form">
            <label className="signup-input-label">Nome:</label>
            <Field
              type="text"
              name="firstName"
              placeholder="Digite seu nome"
              className={
                errors.firstName && touched.firstName
                  ? 'signup-input-error'
                  : 'signup-input'
              }
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="signup-error-message"
            />

            <label className="signup-input-label">Sobrenome:</label>
            <Field
              type="text"
              name="lastName"
              placeholder="Digite seu sobrenome"
              className={
                errors.lastName && touched.lastName
                  ? 'signup-input-error'
                  : 'signup-input'
              }
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="signup-error-message"
            />

            <label className="signup-input-label">Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Digite seu email"
              className={
                errors.email && touched.email
                  ? 'signup-input-error'
                  : 'signup-input'
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="signup-error-message"
            />

            <label className="signup-input-label">Senha:</label>
            <Field
              type="password"
              name="password"
              placeholder="Digite uma senha"
              className={
                errors.password && touched.password
                  ? 'signup-input-error'
                  : 'signup-input'
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="signup-error-message"
            />

            <button
              type="submit"
              className={
                isValid ? 'signup-submit-button' : 'signup-submit-button-error'
              }
              disabled={!isValid}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
