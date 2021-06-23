import ReactDOM from 'react-dom'
import App from 'containers/App'
import productsReducer from 'redux/reducers/products'

import 'simplebar/dist/simplebar.min.css'
import 'styles/index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(productsReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
