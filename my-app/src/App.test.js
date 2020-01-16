import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("Do balls show up on screen", ()=> {
const { getByText }  = render(<App />);

getByText(/balls/i);
})

test("Do Strikes show up on screen", ()=> {
  const { getByText }  = render(<App />);
  
  getByText(/strikes/i);
  })
// test('Does Strikes go to 3 and then reset', () => {

// })