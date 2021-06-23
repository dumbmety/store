import './style.css'
import Grid from './Grid'
import List from './List'

export default function Actions() {
  return (
    <nav className="hidden md:flex product-header__actions">
      <ul>
        <Grid />
        <List />
      </ul>
    </nav>
  )
}
