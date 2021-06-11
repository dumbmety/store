import styles from './style.module.css'

import Navbar from './Navbar'
import OrderSummary from './OrderSummary'
import SubmitOrder from './SubmitOrder'

export default function Cart() {
  return (
    <div className={`${styles.Cart}`}>
      <Navbar quantity={2} />
      <OrderSummary />
      <SubmitOrder TotalPrice="1600" />
    </div>
  )
}
