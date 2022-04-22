/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './button';

const muiPrimary = '#1976d2';
const materialPrimary = '#6200cc';

export default function ButtonExample() {
  return (
    <Button
      primary={materialPrimary}
      surface="#ffffff"
      variant="contained"
      size="medium"
    >
      Hello
    </Button>
  );
}
