import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Redirect from './';

test('Redirect', async () => {
  render(<Redirect to="/name" />, { wrapper: BrowserRouter });
  expect(window.location.pathname).toBe('/name');
});
