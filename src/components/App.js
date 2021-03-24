import { useState } from 'react'
import Categories from './Categories'
import ResultsPage from './ResultsPage'

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
          <Route>
            <ResultsPage userInput={userInput} setUserInput={setUserInput} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
