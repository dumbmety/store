import './style.css'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Product({ name, price, status, image, route, GridView }) {
  return (
    <li className={`product  ${!GridView && 'flex'}`}>
      <div>
        <Link to={`/product/${route}`} className="route" />
        <img className="image" src={`/images/${image}`} alt={name} />
      </div>
      <div className={`details ${!GridView && 'ml-4'}`}>
        <div>
          <h3 className="name">{name}</h3>
          <h4 className="price">${price}</h4>
        </div>
        <span
          className={`status ${!GridView && 'ml-1'} ${
            status ? 'available' : 'unavailable'
          }`}
        />
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
