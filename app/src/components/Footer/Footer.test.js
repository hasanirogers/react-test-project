import { render } from '@testing-library/react';
import { UIContext } from '../../App';
import Footer from './';

test('Footer', () => {
  const { container } = render(
    <UIContext.Provider value={{ steps: ['name', 'help', 'date']}}>
      <Footer activeStep="name" />
    </UIContext.Provider>
  );

  expect(container).toBeInTheDocument();
});
