import { useState } from 'react'
import styled from 'styled-components/macro'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fussball from '../material/images/fussball/fussballImage1.png'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

const bookmark = <AiOutlinePlusSquare size="30" />
const unbookmark = <AiFillPlusSquare size="30" />

export default function ProductCard({
  id,
  title,
  stars,
  price,
  frequency,
  zip,
  city,
  dates,
  description,
}) {
  const [bookmarkedCard, setbookmarkedCard] = useState([])
  const [dropdown, setDropdown] = useState('20')
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [reviewCards, setreviewCards] = useState([])

  function ReviewCard({ title, details, color }) {
    return (
      <ReviewWrapper>
        <StarWrapper>
          {[...Array(rating || 0)].map(star => (
            <AiFillStar />
          ))}
          {[...Array(5 - rating)].map(star => (
            <AiOutlineStar />
          ))}
        </StarWrapper>
        <ReviewTitle>{title}</ReviewTitle>
        <ReviewDetails>{details}</ReviewDetails>
      </ReviewWrapper>
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { title: titleInput, details: detailsTextarea } = form.elements
    const newCard = { title: titleInput.value, details: detailsTextarea.value }
    setreviewCards([newCard, ...reviewCards])
  }

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  function bookmarkCard(currentId) {
    let newArray

    if (bookmarkedCard.includes(currentId)) {
      newArray = bookmarkedCard.filter(id => id !== currentId)
    } else {
      newArray = [...bookmarkedCard, currentId]
    }

    setbookmarkedCard(newArray)
    console.log(newArray)
  }

  return (
    <IconContext.Provider value={{ size: '14px' }}>
      <Card>
        <HeaderWrapper>
          <Title>Fußball bei Victoria Hamburg</Title>
          <StarBookmarkWrapper>
            <StarWrapper>
              {[...Array(rating || 0)].map(star => (
                <AiFillStar />
              ))}
              {[...Array(5 - rating)].map(star => (
                <AiOutlineStar />
              ))}
            </StarWrapper>
            <BookmarkButton
              role="button"
              aria-label="toggle-bookmark"
              onClick={() => bookmarkCard(3)}
            >
              {bookmarkedCard.includes(3) ? unbookmark : bookmark}
            </BookmarkButton>
          </StarBookmarkWrapper>
        </HeaderWrapper>
        <ImageSlider {...sliderSettings}>
          <div>
            <img src={fussball} alt="" width="100%" />
          </div>
          <div>
            <img src={fussball} alt="" width="100%" />
          </div>
        </ImageSlider>
        <DetailsWrapper>
          <Price>{dropdown}€ monatlich</Price>
          <InfoWrapper>
            <ProviderWrapper>
              <AiFillHome />
              <Provider>SC Victoria Hamburg</Provider>
            </ProviderWrapper>
            <PlaceWrapper>
              <FaMapMarkerAlt />
              <Place>Musterstraße 123, 22222 Hamburg</Place>
            </PlaceWrapper>
            <DatesWrapper>
              <AiFillCalendar />
              <Dates>Mo, Di, Mi, Do, Fr</Dates>
            </DatesWrapper>
          </InfoWrapper>
          <Form>
            <DropdownLabel>Wähle eine Option</DropdownLabel>
            <FormWrapper>
              <Dropdown
                value={dropdown}
                onChange={e => {
                  setDropdown(e.target.value)
                }}
              >
                <option value="20">2. Herren Mannschaft</option>
                <option value="10">A-Jugend</option>
                <option value="20">B-Jugend</option>
                <option value="10">C-Jugend</option>
                <option value="20">D-Jugend</option>
                <option value="10">E-Jugend</option>
                <option value="20">E-Jugend</option>
              </Dropdown>
              <DropdownIcon size="24px" />
              <Button>Termin Buchen</Button>
            </FormWrapper>
          </Form>
          <DescriptionWrapper>
            <DescriptionTitle>Beschreibung</DescriptionTitle>
            <Description>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Description>
          </DescriptionWrapper>
          <RatingWrapper>
            <RatingForm onSubmit={handleSubmit}>
              <RatingTitle>Bewertung</RatingTitle>
              <RatingText>
                Gib eine Bewertung ab zu <br />
                <i>Fußball bei Victoria Hamburg</i>
              </RatingText>
              <RatingStars>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1
                  return (
                    <RatingRadioLabel>
                      <RatingRadioInput
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <AiFillStar
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        color={
                          ratingValue <= (hover || rating) ? '#ffc107' : '#000'
                        }
                        size="30"
                      />
                    </RatingRadioLabel>
                  )
                })}
                <RatingAuthor name="title" placeholder="Dein Name" />
                <RatingTextarea
                  name="details"
                  placeholder="Schreibe eine Bewertung"
                />
                <RatingButton>Bewerten</RatingButton>
              </RatingStars>
            </RatingForm>
            {reviewCards.map(card => (
              <ReviewCard title={card.title} details={card.details} />
            ))}
          </RatingWrapper>
        </DetailsWrapper>
      </Card>
    </IconContext.Provider>
  )
}

const Card = styled.div``

const HeaderWrapper = styled.div`
  display: grid;
  gap: 5px;
  padding: 10px 5px;
  background-color: #eee;
`
const Title = styled.h2`
  font-size: 14px;
  margin: 0;
`
const StarBookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const StarWrapper = styled.div``

const BookmarkButton = styled.button`
  border: none;
`

const ImageSlider = styled(Slider)`
  .slick-dots {
    bottom: 10px;
  }
`

const DetailsWrapper = styled.main`
  padding: 10px 5px;
`

const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`

const InfoWrapper = styled.div`
  display: grid;
  gap: 5px;
  margin: 10px 0;
`

const ProviderWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Provider = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const PlaceWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Place = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const DatesWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Dates = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const Form = styled.form``

const DropdownLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
`

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

const Dropdown = styled.select`
  -webkit-appearance: none;
  background-color: #eee;
  border: 0 solid transparent;
  width: 100%;
  height: 50px;
  font-size: 14px;
  position: relative;
`
const DropdownIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  right: 10px;
  margin-top: 15px;
`

const Button = styled.button`
  width: 80%;
  height: 50px;
  border: 0 solid transparent;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`

const DescriptionWrapper = styled.section`
  padding: 50px 10px;
  display: grid;
  gap: 10px;
`

const DescriptionTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`

const Description = styled.p`
  font-size: 12px;
  line-height: 1.2em;
  margin: 0;
`

const RatingWrapper = styled.section`
  padding: 0 10px;
`

const RatingForm = styled.form`
  display: grid;
  gap: 10px;
`

const RatingTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`

const RatingText = styled.p`
  font-size: 12px;
  line-height: 1.2em;
  margin: 0;
`

const RatingStars = styled.div``

const RatingRadioLabel = styled.label``

const RatingRadioInput = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`

const RatingAuthor = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  margin-bottom: 5px;
  font-family: sans-serif;
  font-size: 12px;
`

const RatingTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-family: sans-serif;
  font-size: 12px;
  outline: none;
`

const RatingButton = styled.button`
  width: 50%;
  height: 50px;
  border: 0 solid transparent;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
`

const ReviewDetails = styled.p`
  font-size: 12px;
`

const ReviewWrapper = styled.section`
  display: grid;
  gap: 5px;
  margin-top: 30px;
`

const ReviewTitle = styled.h4`
  margin: 0;
  font-size: 14px;
`
