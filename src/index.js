import ReactDOM from 'react-dom'

import App from './containers/App'
import 'simplebar/dist/simplebar.min.css'
import './styles/index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productsReducer from './redux/reducers/products'

const store = createStore(productsReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
