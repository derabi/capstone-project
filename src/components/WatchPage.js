import useFetch from './useFetch'
import styled from 'styled-components/macro'
import WatchCard from './WatchCard'
import { products } from '../material/data/data.json'
import { Link } from 'react-router-dom'

import Head from './Head'

export default function WatchPage({ userInput, setUserInput }) {
  const { data: favorites, error, isPending } = useFetch(
    'http://localhost:8000/favorites/'
  )
  return (
    <Wrapper>
      <Head title="Watchlist" />
      <Intro>Dich interessieren folgende Events:</Intro>
      <ResultsWrapper>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {favorites &&
          favorites.map(favorite =>
            products.map(product => {
              if (favorite.pId === product.id) {
                console.log(product.id)
                return (
                  <WatchCard
                    id={favorite.id}
                    image={product.image}
                    altText={product.altText}
                    title={product.title}
                    stars={product.stars}
                    price={product.price}
                    frequency={product.frequency}
                    zip={product.zip}
                    city={product.city}
                    dates={product.dates}
                  />
                )
              }
            })
          )}
      </ResultsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  gap: 10px;
  margin: 20px 5px;
`

const Intro = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`

const ResultsWrapper = styled.section``
const Link1 = styled(Link)`
  text-decoration: none;
`
