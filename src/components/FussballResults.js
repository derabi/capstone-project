import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { options } from '../material/data/fussballData.js'

export default function FussballResults() {
  return (
    <OptionsWrapper>
      {options.map(
        ({ cardImage, cardImageAltText, cardTitle, price, place, dates }) => (
          <MiniCard
            cardImage={cardImage}
            cardImageAltText={cardImageAltText}
            cardTitle={cardTitle}
            price={price}
            place={place}
            dates={dates}
          />
        )
      )}
    </OptionsWrapper>
  )
}

const OptionsWrapper = styled.section``
