import './index.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import products from '../../constants/products'

function Product() {
  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    setProduct(products.find(product => product.route === params.name))
  }, [setProduct, params])

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
