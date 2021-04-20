import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'

import styled from 'styled-components/macro'

import Head from './Head'

const Bookinglist = ({ appointments, products }) => {
  const terminMap = appointments.map(appointment => {
    let pTitle = ''
    let pPrice = ''
    let aTime = ''
    let aDay = ''
    let aMonth = ''
    let aYear = ''
    let pStreet = ''
    let pZip = ''
    let pCity = ''
    let pImage = ''
    let pID = ''
    let pFrequency = ''

    products.map(product => {
      if (product.id.toString() === appointment.productID) {
        pID = product.id.toString()
        pTitle = product.title
        pPrice = product.price
        aTime = appointment.thisTime
        aDay = appointment.thisDay
        aMonth = appointment.thisMonth
        aYear = appointment.thisYear
        pStreet = product.address
        pZip = product.zip
        pCity = product.city
        pImage = product.image
        pFrequency = product.frequency
      }
    })

    let loadImage = () => {
      return require(`../material/images/fussball/${pImage}`).default
    }

    let parseTime = parseInt(aTime, 10)

    console.log(parseTime)

    let hour = Math.floor(parseTime / 60)
    let hour2 = ''
    if (hour < 10) {
      hour2 = '0'
    }
    const minutes = parseTime % 60
    let minutes2 = ''
    if (minutes < 1) {
      minutes2 = '0'
    }
    let Pfad = '/products/' + pID
    return (
      <IconContext.Provider value={{ size: '14px' }}>
        <IntroWrapper>
          <Intro>Deine gebuchten Termine:</Intro>
          <Link to={Pfad}>
            <div className="terminObjekt">
              <div>
                <img src={loadImage()} width="100%" height="auto" />
              </div>
              <div className="product-preview-right-block">
                <div className="product-preview-title">{pTitle}</div>
                <div className="product-preview-price">
                  {pPrice}€ {pFrequency}
                </div>
                <div className="product-preview-date">
                  <AiFillCalendar />
                  {aDay}.{aMonth}.{aYear}
                </div>
                <div className="product-preview-time">
                  <AiFillClockCircle />
                  {hour2}
                  {hour}:{minutes2}
                  {minutes}
                </div>
                <div className="product-preview-city">
                  <FaMapMarkerAlt /> {pStreet}, <br /> {pZip} {pCity}
                </div>
              </div>
            </div>
          </Link>
        </IntroWrapper>
      </IconContext.Provider>
    )
  })

  return <div className="termine-map">{terminMap}</div>
}
export default Bookinglist

const IntroWrapper = styled.section`
  display: grid;
  gap: 10px;
  margin: 20px 5px;
`

const Intro = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`
