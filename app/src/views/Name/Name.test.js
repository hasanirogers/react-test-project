/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import ViewName from './';

test('ViewName', async () => {
  const user = userEvent.setup();
  const { container } = render(
    <ViewName />,
    { wrapper: BrowserRouter }
  );
  const input = container.querySelector('input');

  await user.type(input, 'Hasani');
  expect(input).toHaveValue('Hasani');
});
