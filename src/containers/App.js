import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Product from 'components/Product'
import Cart from 'components/Pages/Cart'

import Home from './Home'
import Auth from './Auth'

export default function App() {
  return (
    <SimpleBar className="max-h-screen">
      <Router>
        <Switch>
          <Route path="/product/:name" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </SimpleBar>
  )
}
