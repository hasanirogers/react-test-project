import { useContext } from "react";
import { UIContext } from "../../App";
import Tracker from "../../components/Tracker";

const ViewHelp = () => {
  const activeStep = 'date';
  const { month, setMonth, day, setDay, year, setYear } = useContext(UIContext).date;

  return (
    <section>
      <div>
        <Tracker activeStep={activeStep} />
        <form>
          <h2>What date?</h2>
          <fieldset className="help">
            <label>
              <div>Month</div>
              <input type="text" value={month} onChange={(event) => setMonth(event.target.value)} />
            </label>
            <label>
              <div>Day</div>
              <input type="text" value={day} onChange={(event) => setDay(event.target.value)} />
            </label>
            <label>
              <div>Year</div>
              <input type="text" value={year} onChange={(event) => setYear(event.target.value)} />
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default ViewHelp;
