import PRODUCTS from '../../constants/products'
import * as actionTypes from '../actions/actions'

const initialState = { products: [...PRODUCTS] }

const productsReducer = (state = initialState, action) => {
  const { type, inputValue } = action
  const { SEARCH_PRODUCT } = actionTypes

  switch (type) {
    case SEARCH_PRODUCT:
      const products = initialState.products
      const filtredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(inputValue.toLowerCase())
      })
      return {
        products: filtredProducts,
      }
    default:
  }
  return state
}

export default productsReducer
