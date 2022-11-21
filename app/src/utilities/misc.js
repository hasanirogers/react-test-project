export const hasCompleted = (completedSteps, requiredSteps = []) => {
  const passes = [];

  if (requiredSteps.length < 1) {
    return;
  }

  requiredSteps.forEach((requiredStep) => {
    passes.push(completedSteps.includes(requiredStep));
  });
  return !passes.includes(false);
}
