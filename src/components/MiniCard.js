import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import fussballer from '../material/images/fussballer.png'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

export default function MiniCard({
  cardImage,
  cardImageAltText,
  cardTitle,
  price,
  place,
  dates,
}) {
  return (
    <IconContext.Provider value={{ size: '14px' }}>
      <Card>
        <ImageWrapper>
          <Image src={cardImage} alt={cardImageAltText} />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>{cardTitle}</Title>
          <StarsWrapper>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarsWrapper>
          <Price>{price}</Price>
          <PlaceWrapper>
            <FaMapMarkerAlt />
            <Place>{place}</Place>
          </PlaceWrapper>
          <DatesWrapper>
            <AiFillCalendar />
            <Dates>{dates}</Dates>
          </DatesWrapper>
        </DetailsWrapper>
      </Card>
    </IconContext.Provider>
  )
}

const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  background-color: #eee;
  margin: 5px;
`

const ImageWrapper = styled.div``

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const DetailsWrapper = styled.div`
  display: grid;
  gap: 5px;
  margin: 10px 0;
`

const Title = styled.h2`
  font-size: 12px;
  margin: 0;
`

const StarsWrapper = styled.div``

const Price = styled.span`
  font-size: 14px;
  margin: 0;
`

const DatesWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

const Dates = styled.div`
  font-size: 12px;
`

const PlaceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

const Place = styled.div`
  font-size: 12px;
`

/* 

import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import fussballer from '../material/images/fussballer.png'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

export default function MiniCard({}) {
  return (
    <IconContext.Provider value={{ size: '14px' }}>
      <Card>
        <ImageWrapper>
          <Image src={fussballer} alt=" " />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>Fußball bei Victoria Hamburg</Title>
          <StarsWrapper>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarsWrapper>
          <Price>Ab 10€</Price>
          <PlaceWrapper>
            <FaMapMarkerAlt />
            <Place>20359 Hamburg</Place>
          </PlaceWrapper>
          <DatesWrapper>
            <AiFillCalendar />
            <Dates>Mo, Di, Mi, Do, Fr</Dates>
          </DatesWrapper>
        </DetailsWrapper>
      </Card>
    </IconContext.Provider>
  )
}

*/
