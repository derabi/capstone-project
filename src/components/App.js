import { useState } from 'react'
import Categories from './Categories'
import Results from './Results'
import ProductCard from './ProductCard'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  const [userInput, setUserInput] = useState('')
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route exact path="/products/:id">
            <ProductCard />
          </Route>
          <Route>
            <Results userInput={userInput} setUserInput={setUserInput} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
