import { useContext } from "react";
import { UIContext } from "../../App";
import { hasCompleted } from "../../utilities/misc";
import Redirect from "../Redirect";

const RouteGuard = (props) => {
  const { View } = props;
  const { completedSteps } = useContext(UIContext);

  return hasCompleted(completedSteps, props.required)
    ? <View />
    : <Redirect to={props.redirect} />;
}

export default RouteGuard;
