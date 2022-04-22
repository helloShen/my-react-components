/* eslint-disable no-unused-vars */
import React from 'react';
import TextField from './textfield';

const muiPrimary = '#1976d2';
const materialPrimary = '#6200cc';
const emailPattern = '^[\\w\\.-]+@[\\w-]+\\.[\\w-]{2,}$';

export default function TextFieldExample() {
  return (
    <TextField
      label="Email"
      helper="example@mail.com"
      primary={muiPrimary}
      pattern={emailPattern}
    />
  );
}
