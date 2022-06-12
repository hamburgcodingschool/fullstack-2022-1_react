import { render, screen } from '@testing-library/react';
import List from './List'

test('renders learn react in list js file', () => {
  render(<List />); 

  const linkElement = screen.getByText(/lorem ipsum/i);
  expect(linkElement).toBeInTheDocument();

  

});
