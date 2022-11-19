import { useContext, useState } from "react";
import { UIContext } from "../../App";
import Tracker from "../../components/Tracker";

const ViewName = () => {
  const activeStep = 'name';
  const { name, setName } = useContext(UIContext).name;
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (event) => {
    setHasChanged(true);
    setName(event.target.value);
  }

  const makeInput = () => {
    if (hasChanged) {
      return <input type="text" onChange={handleChange} />
    }
    return <input type="text" value={name} onChange={handleChange} />
  }

  return (
    <section>
      <div>
        <Tracker activeStep={activeStep} />
        <form>
          <h2>What's your name?</h2>
          {makeInput()}
        </form>
      </div>
    </section>
  )
}

export default ViewName;
