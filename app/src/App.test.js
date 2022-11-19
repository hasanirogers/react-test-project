import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter} from "react-router-dom";
import ViewName from './views/Name';
import ViewHelp from './views/Help';
import ViewDate from './views/Date';

test('App', () => {
  render(<App />);

  // const steps = ['name', 'help', 'date'];
  // const firstStep = steps[0];

  // const context = {
  //   date: {
  //     month: '',
  //     setMonth: () => {},
  //     day: '',
  //     setDay: () => {},
  //     year: '',
  //     setYear: () => {},
  //   }
  // };


  // render(
  //   <UIContext.Provider value={context}>
  //     <RouterProvider router={router} />
  //   </UIContext.Provider>
  // );

  // const title = screen.getByText(/What date?/i);
  // expect(title).toBeInTheDocument();
});

test('Route name', () => {
  const route = '/name'
  render(
    <MemoryRouter initialEntries={[route]}>
      <ViewName />
    </MemoryRouter>,
  )
  expect(screen.getByText(/What's your name?/i)).toBeInTheDocument();
});

test('Route help', () => {
  const route = '/help'
  render(
    <MemoryRouter initialEntries={[route]}>
      <ViewHelp />
    </MemoryRouter>,
  )
  expect(screen.getByText(/What do you need help with?/i)).toBeInTheDocument();
});

test('Route date', () => {
  const route = '/date'
  render(
    <MemoryRouter initialEntries={[route]}>
      <ViewDate />
    </MemoryRouter>,
  )
  expect(screen.getByText(/What date?/i)).toBeInTheDocument();
});
