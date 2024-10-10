import { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import InputFactory from '../factories/InputFactory';
import '../styles/form.css';

export default function Form() {
  const { form, errors, handleChange, validateForm } = useForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', form);
    } else {
      console.log('Validation errors', errors);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {InputFactory('text', 'Name', handleChange, errors.name)}
      {InputFactory('email', 'Email', handleChange, errors.email)}
      {InputFactory('textarea', 'Message', handleChange, errors.message)}
      <button type='submit' className='form-button'>
        Submit
      </button>
    </form>
  );
}
