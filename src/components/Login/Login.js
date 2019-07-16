import React from 'react';
import { Modal } from '../Elements/index';
import LoginForm from './LoginForm/LoginForm';
import './Login.css';

const Login = ({ show, disposeModal }) =>
  show ? (
    <Modal disposeModal={disposeModal}>
      <LoginForm disposeModal={disposeModal} />
    </Modal>
  ) : null;

export default Login;
