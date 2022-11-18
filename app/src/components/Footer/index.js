import { useContext } from "react";
import { UIContext } from "../../App";
import styles from './Footer.module.scss';

const Footer = (props) => {
  const { activeStep } = props;
  const { steps } = useContext(UIContext);

  const makeBullets = () => {
    return steps.map(step => <li className={step === activeStep ? styles.active : null}></li>);
  }

  return (
    <footer className={styles.footer}>
      <ul>{makeBullets()}</ul>
    </footer>
  );
}

export default Footer;
