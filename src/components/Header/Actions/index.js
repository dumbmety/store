import Grid from './Grid/Index'
import List from './List/Index'
import './style.css'
const actions = props => {
  const { setGridView, GridView } = props
  return (
    <nav className="hidden md:block product-header__actions">
      <ul>
        <Grid GridView={GridView} setGridView={setGridView} />
        <List GridView={GridView} setGridView={setGridView} />
      </ul>
    </nav>
  )
}

export default actions
