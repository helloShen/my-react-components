/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import FooterExample from '../footer/example';
import ButtonExample from '../button/example';
import TextFieldExample from '../textfield/example';
import CardExample from '../card/example';

const root = ReactDOM.createRoot(
  document.querySelector('.root'),
);

function testFooter() {
  root.render(<FooterExample />);
}

function testButton() {
  root.render(<ButtonExample />);
}

function testTextField() {
  root.render(<TextFieldExample />);
}

function testCard() {
  root.render(<CardExample />);
}

// testFooter();
// testButton();
// testTextField();
testCard();
