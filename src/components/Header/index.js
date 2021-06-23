import './style.css'
import Actions from './Actions'
import Searchbar from './Searchbar'

export default function Header() {
  return (
    <header className="products-header">
      <Searchbar />
      <Actions />
    </header>
  )
}
