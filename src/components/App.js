import Categories from './Categories'
import Results from './Results'
import ProductCard from './ProductCard'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route>
            <ProductCard exact path="/productCard" />
          </Route>
          <Route exact path="/fussball">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
