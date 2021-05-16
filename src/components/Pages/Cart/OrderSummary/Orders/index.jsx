import products from '../../../../../constants/products'
import Order from './Order'
import classes from './style.module.css'

const Orders = () => {
  return (
    <section className={classes.Orders}>
      <ul>
        {products.map((product, index) => {
          if (index > 1) return
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
