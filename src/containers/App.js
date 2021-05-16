import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Product from '../components/Product'
import Auth from './Auth'
import Cart from '../components/Pages/Cart'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:name" component={Product} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  )
}

export default App
