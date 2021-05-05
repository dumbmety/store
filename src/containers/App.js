import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Product from '../components/Product'
import Auth from './Auth'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:name" component={Product} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
