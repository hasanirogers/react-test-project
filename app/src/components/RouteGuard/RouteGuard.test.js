import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import RouteGuard from './';
import ViewHelp from '../../views/Help';
import { UIContext } from '../../App';

test('Renders a view', async () => {
  const context = {
    steps: [],
    currentStep: '',
    setCurrentStep: () => {},
    completedSteps: ['name'],
    setCompletedSteps: () => {},
    help: {
      optionA: '',
      setOptionA: () => {},
      optionB: '',
      setOptionB: () => {},
      optionC: '',
      setOptionC: () => {},
      option4: '',
      setOption4: () => {},
    }
  };

  render(
    <UIContext.Provider value={context}>
      <RouteGuard redirect="/" required={['name']} View={ViewHelp} />
    </UIContext.Provider>,
    { wrapper: BrowserRouter }
  );

  const text = screen.getByText(/What do you need help with?/i);
  expect(text).toBeInTheDocument();
});

test('Redirects when requirements are not met', () => {
  const { container } = render(<RouteGuard redirect="/" required={['fake']} View={ViewHelp} />, { wrapper: BrowserRouter });
  expect(container).toBeInTheDocument();
});
