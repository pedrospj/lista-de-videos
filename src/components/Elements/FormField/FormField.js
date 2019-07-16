import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormField.css';

const FormField = props => {
  const {
    label,
    fieldType,
    fieldName,
    fieldPlaceholder,
    error,
    touched
  } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <Field
        type={fieldType}
        name={fieldName}
        placeholder={fieldPlaceholder}
        className={error && touched ? 'form-input-error' : 'form-input'}
      />
      <ErrorMessage
        name={fieldName}
        component="div"
        className="form-error-message"
      />
    </>
  );
};

export default FormField;
