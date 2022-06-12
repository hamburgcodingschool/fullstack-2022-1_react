import { render, screen } from '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // which component I need to check

  // searching for particular element 
  const linkElement = screen.getByText(/Grocery Application/i);
  expect(linkElement).toBeInTheDocument();

});