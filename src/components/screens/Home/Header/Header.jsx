import Logo from "./Logo/Logo"
import Menu from "./Menu/menu"
import styles from "./Header.module.css"
import Button from "../../../ui/buttons/Button-header"
function Header() {
  return (
    <div className="container container--header">
      <div className={styles.header__wrapper}>
        <Logo/>
        <Menu/>
        <Button/>
      </div>
    </div>
  )
}
export default Header