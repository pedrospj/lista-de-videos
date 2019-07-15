import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import './LogoutModal.css';

const SignoutIcon = () => <i className="fas fa-sign-out-alt" />;

const LogoutModal = ({ disposeModal }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.logout());
    disposeModal();
  };
  return (
    <div className="logout-backdrop" onClick={() => disposeModal()}>
      <div className="logout-container" onClick={e => e.stopPropagation()}>
        <button
          className="fas fa-times logout-close-modal"
          onClick={() => disposeModal()}
        />
        <p className="logout-p">Deseja fazer logout da conta?</p>
        <button className="logout-button" onClick={logout}>
          Sair <SignoutIcon />
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
