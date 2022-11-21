import { hasCompleted  } from './misc';

test('hasCompleted', async () => {
  const steps = ['name', 'help'];
  const result = hasCompleted(steps, steps);
  const emptyResult = hasCompleted(steps);
  expect(result).toBe(true);
  expect(emptyResult).toBe(undefined);
});
