import React from 'react';
import './Modal.css';

const CloseIcon = ({ closeModal }) => (
  <button
    className="fas fa-times modal-close-icon"
    onClick={() => closeModal()}
  />
);

const Modal = ({ disposeModal, children }) => (
  <div className="modal-backdrop" onClick={() => disposeModal()}>
    <div className="modal-container" onClick={e => e.stopPropagation()}>
      <CloseIcon closeModal={disposeModal} />
      {children}
    </div>
  </div>
);

export default Modal;
