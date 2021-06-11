import { ShoppingCartIcon } from '@heroicons/react/outline'
import styles from './style.module.css'

function OrderSummaryTitle() {
  return (
    <header className={styles.Title}>
      <ShoppingCartIcon className={styles.Icon} />
      <h1>Order Summary</h1>
    </header>
  )
}

export default OrderSummaryTitle
