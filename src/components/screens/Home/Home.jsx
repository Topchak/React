import Promo from "./Promo/Promo"
import styles from "./Home.module.css"
import Header from "./Header/Header"
function Home() {


  return (
    <div className={styles.bg}>
      <header className='header'>
        <Header/>
      </header>
        < Promo/>
        <div>
    </div>
    </div>

    
  )
}
export default Home