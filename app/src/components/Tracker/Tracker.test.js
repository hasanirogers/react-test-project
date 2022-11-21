/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Tracker from '.';
import { UIContext } from '../../App';

test('Tracker', async () => {
  const user = userEvent.setup();

  const context = {
    steps: ['name', 'help', 'date'],
    currentStep: 'help',
    setCurrentStep: () => {},
    completedSteps: [],
    setCompletedSteps: () => {},
    name: {
      name: '',
      setName: () => {},
    },
    help: {
      optionA: '',
      setOptionA: () => {},
      optionB: '',
      setOptionB: () => {},
      optionC: '',
      setOptionC: () => {},
      option4: '',
      setOption4: () => {},
    },
    date: {
      month: '',
      setMonth: () => {},
      day: '',
      setDay: () => {},
      year: '',
      setYear: () => {},
    }
  };

  const { container } = render(
    <UIContext.Provider value={context}>
      <Tracker activeStep="help" />
    </UIContext.Provider>,
    { wrapper: BrowserRouter }
  );

  const prevButton = container.querySelectorAll('button')[0];
  const nextButton = container.querySelectorAll('button')[1];

  await user.click(nextButton);
  expect(window.location.pathname).toBe('/date');

  await user.click(prevButton);
  expect(window.location.pathname).toBe('/name');
});
