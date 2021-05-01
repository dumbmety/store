import { SearchIcon } from '@heroicons/react/outline'
import './style.css'
const searchbar = () => {
  return (
    <div className="products-header__searchbar">
      <input type="search" placeholder='Search product by name...' className="products-header__input" />
      <SearchIcon size={24} className="products-header__icon " />
    </div>
  )
}

export default searchbar
