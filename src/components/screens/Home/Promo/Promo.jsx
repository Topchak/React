import styles from './Promo.module.css';
import Input from './Input/Input'
function Promo() {

  
  return (
    <div className={styles.promo}>
      <div className='container'>
        <div className={styles.content}>
          <h1>My first page React</h1>
          <p>React is an interesting framework.</p>
          <Input/>
        </div>
      </div>
    </div>
  )
}
export default Promo