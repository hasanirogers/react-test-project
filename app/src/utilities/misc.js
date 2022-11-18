export const hasCompleted = (completedSteps, requiredSteps) => {
  const passes = [];
  requiredSteps.forEach((requiredStep) => {
    passes.push(completedSteps.includes(requiredStep));
  });
  return !passes.includes(false);
}
