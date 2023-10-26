import styles from './Input.module.css';

function Input() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search..." />
      
    </div>
  );
}
export default Input;
