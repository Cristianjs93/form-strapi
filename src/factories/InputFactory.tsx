import { ChangeEvent } from 'react';
import TextArea from '../components/controls/TextArea';
import Input from '../components/controls/Input';
import '../styles/input-factory.css';

export default function InputFactory(
  type: string,
  label: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  errors: string
) {
  let inputElement;
  switch (type) {
    case 'textarea':
      inputElement = (
        <TextArea
          label={label}
          value={value}
          onChange={onChange}
          errors={errors}
        />
      );
      break;
    default:
      inputElement = (
        <Input
          label={label}
          value={value}
          onChange={onChange}
          errors={errors}
        />
      );
  }

  return (
    <div className='input-container'>
      <label htmlFor={`input-${type}`} className={errors && 'invalid-label'}>
        {label} *
      </label>
      {inputElement}
      {errors && <span>{errors}</span>}
    </div>
  );
}
