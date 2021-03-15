import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { options } from '../material/data/fussballData.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function FussballResults() {
  return (
    <Router>
      <Switch>
        <OptionsWrapper>
          {options.map(
            ({
              cardLink,
              cardImage,
              cardImageAltText,
              cardTitle,
              price,
              place,
              dates,
            }) => (
              <Route>
                <MiniCard
                  cardLink={cardLink}
                  cardImage={cardImage}
                  cardImageAltText={cardImageAltText}
                  cardTitle={cardTitle}
                  price={price}
                  place={place}
                  dates={dates}
                />
              </Route>
            )
          )}
        </OptionsWrapper>
      </Switch>
    </Router>
  )
}

const OptionsWrapper = styled.section``
