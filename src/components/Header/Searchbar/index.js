import './style.css'
import { SearchIcon } from '@heroicons/react/outline'
import { connect } from 'react-redux'
import * as actionTypes from 'redux/actions'

const SearchBar = ({ searchHandler }) => {
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

const mapDispatchToProps = dispatch => ({
  searchHandler: e =>
    dispatch({ type: actionTypes.SEARCH_PRODUCT, inputValue: e.target.value }),
})

export default connect(null, mapDispatchToProps)(SearchBar)
