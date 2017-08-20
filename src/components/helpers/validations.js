import React from 'react';

export const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

export const required = value => value ? undefined : 'Required';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value => value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
export const minValue7 = minValue(7);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;