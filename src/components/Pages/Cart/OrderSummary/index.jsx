import Orders from './Orders'
import OrderSummaryTitle from './OrderSummaryTitle'
import classes from './style.module.css'

const OrderSummary = () => {
  return (
    <main className={classes.OrderSummary}>
      <OrderSummaryTitle />
      <Orders />
    </main>
  )
}

export default OrderSummary
