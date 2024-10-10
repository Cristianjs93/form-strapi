import { ChangeEvent } from 'react';
import TextArea from './controls/TextArea';
import Input from './controls/Input';
import '../styles/input-factory.css';

export default function InputFactory({
  type,
  label,
  onChange,
  errors,
}: {
  type: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: string;
}) {
  return (
    <div className='input-container'>
      <label htmlFor={`input-${type}`} className={errors && 'invalid-label'}>
        {label} *
      </label>
      {type == 'textarea' ? (
        <TextArea
          type={type}
          label={label}
          onChange={onChange}
          errors={errors}
        />
      ) : (
        <Input type={type} label={label} onChange={onChange} errors={errors} />
      )}
      {errors && <span>{errors}</span>}
    </div>
  );
}
