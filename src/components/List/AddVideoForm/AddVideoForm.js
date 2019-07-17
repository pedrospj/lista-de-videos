import React from 'react';
import { Modal, FormField, FormButton } from '../../Elements/index';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './AddVideoForm.css';

const addFormSchema = Yup.object().shape({
  link: Yup.string().required('Campo obrigatório')
});

const AddVideoForm = props => {
  const dispatch = useDispatch();
  return (
    <Modal {...props}>
      <Formik
        initialValues={{ link: '' }}
        validationSchema={addFormSchema}
        onSubmit={values =>
          dispatch(
            actions.videoSubmit(
              values.link,
              props.userEmail,
              props.disposeModal
            )
          )
        }
      >
        {({ errors, touched, isValid }) => (
          <Form className="addvideo-form">
            <h1 className="form-h1-title">Adicionar novo vídeo</h1>

            <FormField
              label="Link do vídeo:"
              fieldName="link"
              fieldType="text"
              fieldPlaceholder="Ex.: https://youtu.be/FOp3L2OTG6g"
              error={errors.link}
              touched={touched.link}
            />
            <FormButton isFormValid={isValid}>Adicionar</FormButton>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddVideoForm;
