import { ChangeEvent } from 'react';

export default function TextArea({
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
  const placeholder = `Write a ${label.toLowerCase()}`;

  return (
    <textarea
      id={`input-${type}`}
      name={label.toLocaleLowerCase()}
      className={errors && 'invalid-input'}
      onChange={onChange}
      placeholder={placeholder}
      rows={3}
      autoCorrect='on'
      autoComplete='off'
    />
  );
}
