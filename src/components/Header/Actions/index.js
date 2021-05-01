import Grid from "./Grid/Index"
import List from "./List/Index"
import './style.css'
const actions = () => {
  return (
    <nav className='product-header__actions'>
      <ul>
        <List />
        <Grid active />
      </ul>
    </nav>
  )
}

export default actions
