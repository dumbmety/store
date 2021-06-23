import './style.css'
import { useLayout } from 'providers/layout'
import { connect } from 'react-redux'
import Product from './Product'

function Products(props) {
  const { layout } = useLayout()

  const productGridClasses =
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
  const productListClasses = 'grid-cols-1'

  const productsClassess = ['products grid gap-4']
  layout === 'grid'
    ? productsClassess.push(productGridClasses)
    : productsClassess.push(productListClasses)

  return (
    <ul className={productsClassess.join(' ')}>
      {props.products.map(product => (
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

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps)(Products)
