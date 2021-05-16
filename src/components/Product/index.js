import './index.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import products from '../../constants/products'

function Product({ match }) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(products.find(p => p.route === match.params.name))
  }, [])

  return (
    <SimpleBar className="max-h-screen">
      <div className="product-wrapper">
        <div className="image">
          <img src={`/images/${product.image}`} alt={product.name} />
        </div>
        <div className="details">
          <Link className="link" to="/">
            back to home
          </Link>
          <h1 className="name">{product.name}</h1>
          <span className="price">${product.price}</span>
          <p className="description">{product.description}</p>
          <Link to="/cart" className="add-to-cart">
            Add to cart
          </Link>
        </div>
      </div>
    </SimpleBar>
  )
}

export default Product
