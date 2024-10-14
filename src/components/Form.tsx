import { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import PluginService from '../services/PluginService';
import InputFactory from '../factories/InputFactory';
import { showError, showSuccess } from './ui/Toast';
import '../styles/form.css';

export default function Form() {
  const { values, errors, handleChange, validateForm, resetForm } = useForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const { message } = await PluginService.createEntry(values);
        resetForm();
        showSuccess(message);
      } else {
        showError('There are validation errors in the form');
      }
    } catch (err: any) {
      showError(err.message);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {InputFactory('text', 'name', values.name, handleChange, errors.name)}
      {InputFactory('email', 'email', values.email, handleChange, errors.email)}
      {InputFactory(
        'textarea',
        'message',
        values.message,
        handleChange,
        errors.message
      )}
      <button type='submit' className='form-button'>
        Submit
      </button>
    </form>
  );
}
