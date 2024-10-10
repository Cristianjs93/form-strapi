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
  return (
    <textarea
      id={`input-${type}`}
      name={label.toLocaleLowerCase()}
      className={errors && 'invalid-input'}
      onChange={onChange}
      placeholder={label}
      rows={3}
      autoCorrect='on'
      autoComplete='off'
    />
  );
}
