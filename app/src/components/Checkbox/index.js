import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
  const { label, checked, onChange } = props;

  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" onChange={onChange} defaultChecked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default Checkbox;
