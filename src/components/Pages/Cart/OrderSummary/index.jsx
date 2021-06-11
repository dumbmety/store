import styles from './style.module.css'

import Orders from './Orders'
import OrderSummaryTitle from './OrderSummaryTitle'

function OrderSummary() {
  return (
    <main className={styles.OrderSummary}>
      <OrderSummaryTitle />
      <Orders />
    </main>
  )
}

export default OrderSummary
