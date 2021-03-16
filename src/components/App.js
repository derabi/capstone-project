// import styled from 'styled-components/macro'
import Categories from './Categories'
import FussballResults from './FussballResults'
import ProductDetails from './ProductDetails'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route path="/fussball">
            <FussballResults />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
