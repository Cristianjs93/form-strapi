import { ChangeEvent } from 'react';

export default function TextArea({
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
    <textarea
      id={`input-${label}`}
      name={label}
      className={errors && 'invalid-input'}
      value={value}
      onChange={onChange}
      placeholder={`Write a ${label}`}
      rows={3}
      autoCorrect='on'
      autoComplete='off'
    />
  );
}
