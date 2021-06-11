import styles from './style.module.css'
import products from '../../../../../constants/products'
import Order from './Order'

function Orders() {
  return (
    <section className={styles.Orders}>
      <ul>
        {products.map((product, index) => {
          if (index > 1) return false
          return (
            <Order
              key={index}
              name={product.name}
              image={product.image}
              status={product.status}
              category={product.category}
              price={product.price}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Orders
