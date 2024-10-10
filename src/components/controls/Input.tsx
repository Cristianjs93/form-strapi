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
  const placeholder = `Type your ${label.toLowerCase()}`;

  return (
    <input
      id={`input-${type}`}
      name={label.toLocaleLowerCase()}
      className={errors && 'invalid-input'}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
}
