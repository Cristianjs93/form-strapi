import { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import InputFactory from './InputFactory';
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
      <InputFactory
        type='text'
        label='Name'
        onChange={handleChange}
        errors={errors.name}
      />
      <InputFactory
        type='email'
        label='Email'
        onChange={handleChange}
        errors={errors.email}
      />
      <InputFactory
        type='textarea'
        label='Message'
        onChange={handleChange}
        errors={errors.message}
      />
      <button type='submit' className='form-button'>
        Submit
      </button>
    </form>
  );
}
