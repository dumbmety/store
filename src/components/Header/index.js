import Actions from './Actions'
import Searchbar from './Searchbar'
import './style.css'
const header = props => {
  const { setGridView, GridView } = props
  return (
    <header className="products-header">
      <Searchbar />
      <Actions GridView={GridView} setGridView={setGridView} />
    </header>
  )
}

export default header
