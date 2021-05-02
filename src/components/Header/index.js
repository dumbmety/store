import './style.css'

import Actions from './Actions'
import Searchbar from './Searchbar'

function Header() {
  return (
    <header className="products-header">
      <Searchbar />
      <Actions />
    </header>
  )
}

export default Header
