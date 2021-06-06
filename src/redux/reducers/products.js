import PRODUCTS from '../../constants/products'
import * as actionTypes from '../actions/actions'

const initialState = [...PRODUCTS]

const productsReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
  }
  return state
}

export default productsReducer
