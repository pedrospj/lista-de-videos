import React from 'react';
import { Modal } from '../../../Elements/index';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import './LogoutModal.css';

const SignoutIcon = () => <i className="fas fa-sign-out-alt" />;

const LogoutModal = ({ disposeModal }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.logout(disposeModal));
    disposeModal();
  };
  return (
    <Modal disposeModal={disposeModal}>
      <p className="logout-p">Deseja fazer logout da conta?</p>
      <button className="logout-button" onClick={logout}>
        Sair <SignoutIcon />
      </button>
    </Modal>
  );
};

export default LogoutModal;
