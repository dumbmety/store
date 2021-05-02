import './style.css'
import { useContext } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LayoutContext from '../../../providers/layout'

function Product({ name, price, status, image, route, description }) {
  const { layout } = useContext(LayoutContext)

  return (
    <li className={`product ${layout === 'list' && 'list'}`}>
      <div>
        <Link to={`/product/${route}`} className="route" />
        <img className="image" src={`/images/${image}`} alt={name} />
      </div>
      <div className="info">
        <div>
          <h3 className="name">{name}</h3>
          {layout === 'list' && <p className="description">{description}</p>}
          <div className="details">
            {layout === 'list' && (
              <span
                className={`status ${status ? 'available' : 'unavailable'}`}
              />
            )}
            <h4 className="price">${price}</h4>
          </div>
        </div>
        {layout === 'grid' && (
          <span className={`status ${status ? 'available' : 'unavailable'}`} />
        )}
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
  description: PropTypes.string.isRequired,
}

export default Product
