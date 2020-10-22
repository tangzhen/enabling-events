import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.tsx';

test('renders header create event button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CREATE EVENT/i);
  expect(linkElement).toBeInTheDocument();
});
