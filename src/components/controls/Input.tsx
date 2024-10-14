import { ChangeEvent } from 'react';

export default function Input({
  label,
  value,
  onChange,
  errors,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: string;
}) {
  return (
    <input
      type='text'
      id={`input-${label}`}
      name={label}
      className={errors && 'invalid-input'}
      value={value}
      onChange={onChange}
      placeholder={`Type your ${label}`}
      autoComplete='off'
    />
  );
}
