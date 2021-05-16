import { useHistory } from 'react-router-dom'
import classes from './style.module.css'

const SubmitOrder = ({ TotalPrice }) => {
  let history = useHistory()
  const redirectToHome = () => {
    history.push('/')
  }
  return (
    <section className={classes.SubmitOrder}>
      <p className={classes.TotalPrice}>
        Total Price:
        <span> ${TotalPrice}</span>
      </p>
      <button onClick={redirectToHome} className={classes.OrderButton}>
        Order Now
      </button>
    </section>
  )
}

export default SubmitOrder
