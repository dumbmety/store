import './style.css'

import products from '../../constants/products'
import Product from './Product'

function Products() {
  return (
    <ul className="products">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          status={product.status}
          image={product.image}
          route={product.route}
        />
      ))}
    </ul>
  )
}

export default Products
