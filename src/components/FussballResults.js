import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { options } from '../material/data/fussballData.js'

export default function FussballResults() {
  return (
    <OptionsWrapper>
      {options.map(
        ({
          cardLink,
          cardImage,
          cardImageAltText,
          cardTitle,
          cardStars,
          price,
          place,
          dates,
        }) => (
          <MiniCard
            cardLink={cardLink}
            cardImage={cardImage}
            cardImageAltText={cardImageAltText}
            cardTitle={cardTitle}
            cardStars={cardStars}
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
