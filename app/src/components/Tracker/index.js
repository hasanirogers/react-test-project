import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../App";
import profile from '../../assets/profile.svg';
import styles from './Tracker.module.scss';

const Tracker = (props) => {
  const { activeStep } = props;
  const { steps, setCurrentStep, completedSteps, setCompletedSteps } = useContext(UIContext);
  const navigate = useNavigate();
  const currentIndex = steps.indexOf(activeStep);

  const handlePrevStep = () => {
    const prevStep = steps[currentIndex - 1];
    if (prevStep) navigate(`/${prevStep}`);
  }

  const handleNextStep = () => {
    const nextStep = steps[currentIndex + 1];
    setCompletedSteps(completedSteps.concat(activeStep));
    if (nextStep) navigate(`/${nextStep}`);
  }

  useEffect(() => {
    setCurrentStep(activeStep);
    document.title = `ACME | ${activeStep}`;
  }, [completedSteps, setCurrentStep, activeStep]);

  return (
    <div className={styles.tracker}>
      <button className={currentIndex === 0 ? 'visually-hidden' : null} onClick={() => handlePrevStep()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <img src={profile} className={styles.profile} alt="Profile icon." />
      <button className={currentIndex >= steps.length - 1 ? 'visually-hidden' : null} onClick={() => handleNextStep()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  );
}

export default Tracker;
