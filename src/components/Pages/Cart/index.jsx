import Navbar from './Navbar'
import classes from './style.module.css'

const Cart = () => {
  return (
    <div className={`${classes.Cart}`}>
      <Navbar quantity="2" />
    </div>
  )
}

export default Cart
