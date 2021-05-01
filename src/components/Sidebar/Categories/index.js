import './style.css'

import { Link } from 'react-router-dom'
import categories from '../../../constants/categories'

function Categories() {
  return (
    <nav className="categories">
      <ul>
        {categories.map(category => (
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
