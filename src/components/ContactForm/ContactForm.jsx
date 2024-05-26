import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import  css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
const dispatch = useDispatch();
 

    const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
    number: Yup.string().required('Number is required').min(7, 'Number must be at least 7 characters').max(50, 'Number must be at most 50 characters'),
    });
  
  const handleSubmit=(value, formActions) => {
        dispatch(addContact(value));
        formActions.resetForm();
      }
    
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <Field className={css.formInput} type="text" name="name" />
          <ErrorMessage className={css.errorMsg} name="name" component="div" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number</span>
          <Field className={css.formInput} type="text" name="number" />
          <ErrorMessage className={css.errorMsg} name="number" component="div" />
        </label>
        <button className={css.buttonAdd} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm