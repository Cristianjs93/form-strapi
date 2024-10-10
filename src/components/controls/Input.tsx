import { ChangeEvent } from 'react';

export default function Input({
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
    <input
      id={`input-${type}`}
      name={label.toLocaleLowerCase()}
      className={errors && 'invalid-input'}
      type={type}
      onChange={onChange}
      placeholder={label}
      autoComplete='off'
    />
  );
}
