import Categories from './Categories'
import Results from './Results'

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
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
