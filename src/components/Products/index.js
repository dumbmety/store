import './style.css'

import Product from './Product'
import products from '../../constants/products'
import { useLayoutContext } from '../../providers/layout'

function Products() {
  const { layout } = useLayoutContext()

  return (
    <ul
      className={`products grid gap-4 ${
        layout === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
          : 'grid-cols-1'
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
          description={product.description}
        />
      ))}
    </ul>
  )
}

export default Products
