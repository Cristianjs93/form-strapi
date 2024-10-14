import { ChangeEvent, useState } from 'react';
import IForm from '../models/IForm';
import { validators } from '../data/constants/validators';
import { initialState } from '../data/constants/initialFormState';
import {
  getEmailErrorMessage,
  getMessageErrorMessage,
  getNameErrorMessage,
} from '../utils/getErrorsMessage';

export default function useForm() {
  const [values, setValues] = useState<IForm>(initialState);

  const [errors, setErrors] = useState<IForm>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: IForm = { name: '', email: '', message: '' };

    if (!validators.name.test(values.name)) {
      newErrors.name = getNameErrorMessage(values.name.length);
    }
    if (!validators.email.test(values.email)) {
      newErrors.email = getEmailErrorMessage(values.email.length);
    }
    if (!validators.message.test(values.message)) {
      newErrors.message = getMessageErrorMessage(values.message.length);
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors(initialState);
  };

  return { values, errors, handleChange, validateForm, resetForm };
}
