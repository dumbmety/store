import { useHistory } from 'react-router-dom'
import styles from './style.module.css'

function SubmitOrder({ TotalPrice }) {
  let history = useHistory()

  return (
    <section className={styles.SubmitOrder}>
      <p className={styles.TotalPrice}>
        Total Price:
        <span> ${TotalPrice}</span>
      </p>
      <button onClick={() => history.push('/')} className={styles.OrderButton}>
        Order Now
      </button>
    </section>
  )
}

export default SubmitOrder
