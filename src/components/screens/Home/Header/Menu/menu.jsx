import styles from './Menu.module.css';
function Menu(){
  return (
    <ul className={styles.menu}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Services</a></li>
    </ul>
  )
}
export default Menu