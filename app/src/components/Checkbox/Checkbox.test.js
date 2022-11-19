import { render, screen } from '@testing-library/react';
import Checkbox from './';

test('Checkbox', () => {
  render(<Checkbox label="The Checkbox" />);
  const label = screen.getByText(/The Checkbox/i);
  expect(label).toBeInTheDocument();
});
