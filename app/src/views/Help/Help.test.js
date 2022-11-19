import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import ViewHelp from './';

test('ViewHelp', async () => {
  const user = userEvent.setup();

  render(
    <ViewHelp />,
    { wrapper: BrowserRouter }
  );

  const optionA = screen.getByLabelText('Option A');
  const optionB = screen.getByLabelText('Option B');
  const optionC = screen.getByLabelText('Option C');
  const option4 = screen.getByLabelText('Option 4');

  await user.click(optionA);
  await user.click(optionB);
  await user.click(optionC);
  await user.click(option4);

  expect(optionA.checked).toBe(true);
  expect(optionB.checked).toBe(true);
  expect(optionC.checked).toBe(true);
  expect(option4.checked).toBe(true);
});
