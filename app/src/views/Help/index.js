import { useContext } from "react";
import { UIContext } from "../../App";
import Checkbox from "../../components/Checkbox";
import Tracker from "../../components/Tracker";

const ViewHelp = () => {
  const activeStep = 'help';
  const { optionA, setOptionA, optionB, setOptionB, optionC, setOptionC, option4, setOption4 } = useContext(UIContext).help;

  return (
    <section>
      <div>
        <Tracker activeStep={activeStep} />
        <form>
          <h2>What do you need help with?</h2>
          <small>(Choose all that apply)</small>
          <fieldset>
            <Checkbox checked={optionA} label="Option A" onChange={(event) => setOptionA(event.target.checked)} />
            <Checkbox checked={optionB} label="Option B" onChange={(event) => setOptionB(event.target.checked)} />
            <Checkbox checked={optionC} label="Option C" onChange={(event) => setOptionC(event.target.checked)} />
            <Checkbox checked={option4} label="Option 4" onChange={(event) => setOption4(event.target.checked)} />
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default ViewHelp;
