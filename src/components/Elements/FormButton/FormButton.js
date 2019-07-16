import React from 'react';

const FormButton = ({ children, isFormValid }) => (
  <button
    type="submit"
    disabled={!isFormValid}
    className={
      isFormValid ? 'form-submit-button' : 'form-submit-button-disabled'
    }
  >
    {children}
  </button>
);

export default FormButton;
