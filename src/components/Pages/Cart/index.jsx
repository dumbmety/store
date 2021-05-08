import Navbar from './Navbar'
import OrderSummary from './OrderSummary'
import classes from './style.module.css'
import SubmitOrder from './SubmitOrder'

const Cart = () => {
  return (
    <div className={`${classes.Cart}`}>
      <Navbar quantity="2" />
      <OrderSummary />
      <SubmitOrder TotalPrice="1600" />
    </div>
  )
}

export default Cart
