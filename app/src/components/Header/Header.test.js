import { render } from '@testing-library/react';
import Header from './';

test('Header', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});
