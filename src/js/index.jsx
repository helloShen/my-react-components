/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Footer from '../footer/footer';
import Button from '../button/button';

const root = ReactDOM.createRoot(
  document.querySelector('.root'),
);
const muiPrimary = '#1976d2';
const materialPrimary = '#6200cc';
root.render(
  <Button
    // primary={muiPrimary}
    primary={materialPrimary}
    surface="#ffffff"
    variant="contained"
    size="medium"
  >
    Hello
  </Button>,
);
