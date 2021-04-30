import './index.css'

import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../../constants'

function Categories() {
  return (
    <ul className="categories">
      {CATEGORIES.map(category => (
        <li key={category.id}>
          <Link to={category.route}>{category.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Categories
