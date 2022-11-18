import { useContext } from "react";
import { UIContext } from "../../App";
import Tracker from "../../components/Tracker";

const ViewName = () => {
  const activeStep = 'name';
  const { name, setName } = useContext(UIContext).name;

  return (
    <section>
      <div>
        <Tracker activeStep={activeStep} />
        <form>
          <h2>What's your name?</h2>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </form>
      </div>
    </section>
  )
}

export default ViewName;
