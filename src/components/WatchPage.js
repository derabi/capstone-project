import useFetch from './useFetch'
import styled from 'styled-components/macro'
import WatchCard from './WatchCard'
import { products } from '../material/data/data.json'
import { Link } from 'react-router-dom'

export default function WatchPage({ userInput, setUserInput }) {
  const { data: favorites, error, isPending } = useFetch(
    'http://localhost:8000/favorites/'
  )
  return (
    <>
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
    </>
  )
}

const ResultsWrapper = styled.section`
  display: grid;
  gap: 5px;
`
const Link1 = styled(Link)`
  text-decoration: none;
`
