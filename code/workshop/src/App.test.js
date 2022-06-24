import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // which component I need to check

  // searching for particular element 
  const linkElement = screen.getByText(/Clear items/i);
  expect(linkElement).toBeInTheDocument();

});

test('renders trying test link', () => {
  render(<App />); // which component I need to check

  const linkElement2 = screen.getByText(/Trying test/i);
  // expect(linkElement2).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByTestId('app-header')
  expect(linkElement3).toBeInTheDocument();

  const linkElement4 = screen.getByRole('block')
  expect(linkElement4).toBeInTheDocument();

  // expect(linkElement2).toBeNotInTheDocument();
});

