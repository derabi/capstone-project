import { useState } from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import WatchPage from './WatchPage'
import Navigation from './Navigation'
import Categories from './Categories'
import Results from './Results'
import ProductCard from './ProductCard'
import Review from './Review'
import CreateForm from './CreateForm'
import BookAppointment from './BookAppointment'
import Bookings from './Bookings'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profil from './Profil'

export default function App() {
  const [userInput, setUserInput] = useState('')
  return (
    <AppLayout>
      <Router>
        <div>
          <Switch>
            <Route exact path="/watch">
              <WatchPage />
            </Route>
            <Route exact path="/bookings">
              <Bookings />
            </Route>
            <Route exact path="/create">
              <CreateForm />
            </Route>
            <Route exact path="/profil">
              <Profil />
            </Route>
            <Route exact path="/">
              <Categories />
            </Route>
            <Route exact path="/products/:id">
              <ProductCard />
            </Route>
            <Route exact path="/products/:id/book">
              <BookAppointment />
            </Route>
            <Route>
              <Results userInput={userInput} setUserInput={setUserInput} />
            </Route>
          </Switch>
          <Footer>
            <Navigation />
          </Footer>
        </div>
      </Router>
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  overflow-y: scroll;
  padding: 45px 0;
`

const Footer = styled.footer`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
`
