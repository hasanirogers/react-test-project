import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import ViewDate from './';

test('ViewHelp', async () => {
  const user = userEvent.setup();

  render(
    <ViewDate />,
    { wrapper: BrowserRouter }
  );

  const month = screen.getByLabelText('Month');
  const day = screen.getByLabelText('Day');
  const year = screen.getByLabelText('Year');

  await user.type(month, '05');
  await user.type(day, '06');
  await user.type(year, '1985');

  expect(month).toHaveValue('05');
  expect(day).toHaveValue('06');
  expect(year).toHaveValue('1985');
});
