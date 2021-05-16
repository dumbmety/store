import { ShoppingCartIcon } from '@heroicons/react/outline'
import classes from './style.module.css'

const OrderSummaryTitle = () => {
  return (
    <header className={classes.Title}>
      <ShoppingCartIcon className="w-10 h-10" />
      <h1>Order Summary</h1>
    </header>
  )
}

export default OrderSummaryTitle
