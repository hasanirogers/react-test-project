import { useContext } from "react";
import { UIContext } from "../../App";
import ViewHelp from ".";
import Redirect from "../../Components/Redirect";

const GuardHelp = () => {
  const { completedSteps } = useContext(UIContext);

  const hasCompleted = (completedSteps, requiredSteps) => {
    let passes = [];

    requiredSteps.forEach((requiredStep) => {
      passes.push(completedSteps.includes(requiredStep));
    });

    return !passes.includes(false);
  }

  return hasCompleted(completedSteps, ['name'])
    ? <ViewHelp />
    : <Redirect to="/" />;
}

export default GuardHelp;
