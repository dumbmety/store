import Navbar from './Navbar'
import OrderSummary from './OrderSummary'
import classes from './style.module.css'

const Cart = () => {
  return (
    <div className={`${classes.Cart}`}>
      <Navbar quantity="2" />
      <OrderSummary />
    </div>
  )
}

export default Cart
