import { SearchIcon } from '@heroicons/react/outline'
import { connect } from 'react-redux'
import * as actionTypes from '../../../redux/actions/actions'
import './style.css'
const searchbar = props => {
  const { searchHandler } = props
  return (
    <div className="products-header__searchbar">
      <input
        type="search"
        placeholder="Search product by name..."
        className="products-header__input"
        onChange={e => searchHandler(e)}
      />
      <SearchIcon size={24} className="products-header__icon " />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  const { SEARCH_PRODUCT } = actionTypes
  return {
    searchHandler: e =>
      dispatch({ type: SEARCH_PRODUCT, inputValue: e.target.value }),
  }
}

export default connect(null, mapDispatchToProps)(searchbar)
