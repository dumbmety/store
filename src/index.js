import ReactDOM from 'react-dom'

import App from './containers/App'
import 'simplebar/dist/simplebar.min.css'
import './styles/index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = ['test']

const reducer = (state = initialState, action) => {
  return state
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
