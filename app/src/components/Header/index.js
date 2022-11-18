import ACMELogo from '../../assets/acme.svg';
import hamburger from '../../assets/hamburger.svg';
import question from '../../assets/question.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={hamburger} className={styles.hamburger} alt="Hamburger menu." />
      <img src={ACMELogo} className={styles.logo} alt="ACME logo." />
      <img src={question} className={styles.question} alt="More information." />
    </header>
  );
}

export default Header;
