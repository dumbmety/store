import products from '../../../../../constants/products'
import Order from './Order'

const Orders = () => {
  return (
    <section>
      <ul>
        {products.map((product, index) => {
          if (index > 1) return
          return (
            <Order
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
