import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Formik, Form } from 'formik';
import { FormField, FormButton } from '../Elements/index';
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
  const redirect = useSelector(state => state.auth.redirect);

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
            <FormField
              fieldName="firstName"
              label="Nome:"
              fieldType="text"
              fieldPlaceholder="Digite seu nome"
              error={errors.firstName}
              touched={touched.firstName}
            />

            <FormField
              fieldName="lastName"
              label="Sobrenome:"
              fieldType="text"
              fieldPlaceholder="Digite seu sobrenome"
              error={errors.lastName}
              touched={touched.lastName}
            />

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

            <FormButton isFormValid={isValid}>Enviar</FormButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
