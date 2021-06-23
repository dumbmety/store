import './style.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLayout } from 'providers/layout'

export default function Product(props) {
  const { layout } = useLayout()

  const isGrid = layout === 'grid'
  const isList = layout === 'list'

  const productClasses = ['product']
  if (isList) productClasses.push('list')

  const statusClasses = ['status']
  props.status
    ? statusClasses.push('available')
    : statusClasses.push('unavailable')

  return (
    <li className={productClasses.join(' ')}>
      <div className="image-wrapper">
        <Link to={`/product/${props.route}`} className="route" />
        <img
          className="image"
          src={`/images/${props.image}`}
          alt={props.name}
        />
      </div>
      <div className="info">
        <div>
          <h3 className="name">{props.name}</h3>
          {isList && <p className="description">{props.description}</p>}
          <div className="details">
            {isList && <span className={statusClasses.join(' ')} />}
            <h4 className="price">${props.price}</h4>
          </div>
        </div>
        {isGrid && <span className={statusClasses.join(' ')} />}
      </div>
    </li>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
  description: PropTypes.string,

  price: PropTypes.number,
  status: PropTypes.bool,
}
