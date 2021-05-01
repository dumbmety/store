import './style.css'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Product({ name, price, status, image, route }) {
  return (
    <li className="product">
      <Link to={`/product/${route}`} className="route" />
      <img className="image" src={`/images/${image}`} alt={name} />
      <div className="details">
        <div>
          <h3 className="name">{name}</h3>
          <h4 className="price">${price}</h4>
        </div>
        <span className={`status ${status ? 'available' : 'unavailable'}`} />
      </div>
    </li>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

export default Product
