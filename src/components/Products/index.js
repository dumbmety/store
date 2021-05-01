import './style.css'

import products from '../../constants/products'
import Product from './Product'

const Products = props => {
  const { GridView } = props
  return (
    <ul
      className={`products ${
        GridView
          ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
          : 'grid grid-cols-1 gap-4'
      }`}
    >
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          status={product.status}
          image={product.image}
          route={product.route}
          GridView={GridView}
        />
      ))}
    </ul>
  )
}

export default Products
