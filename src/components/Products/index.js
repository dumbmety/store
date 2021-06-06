import './style.css'
import { useContext } from 'react'

import Product from './Product'
import LayoutContext from '../../providers/layout'
import { connect } from 'react-redux'

function Products(props) {
  const { layout } = useContext(LayoutContext)
  const { products } = props
  console.log(products)
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
const mapStateToProps = state => {
  return {
    products: state,
  }
}
export default connect(mapStateToProps)(Products)
