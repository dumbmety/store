import './index.css'

import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../../constants'

function Categories() {
  return (
    <nav className="categories">
      <ul>
        {CATEGORIES.map(category => (
          <li key={category.id}>
            <Link to={category.route} className="category">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
