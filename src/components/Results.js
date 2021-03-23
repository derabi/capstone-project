import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'
import ResultsFilter from './ResultsFilter'
import { Link } from 'react-router-dom'
import { daten } from '../material/data/daten.js'

export default function Results({ userInput, setUserInput }) {
  return (
    <>
      <ResultsFilter userInput={userInput} setUserInput={setUserInput} />
      <ResultsWrapper>
        {daten
          .filter(data => data.city.toLowerCase().includes(userInput))
          .map(data => (
            <Link1 to={`/products/1`}>
              <MiniCard
                image={data.image}
                altText={data.altText}
                title={data.title}
                stars={data.stars}
                price={data.price}
                frequency={data.frequency}
                zip={data.zip}
                city={data.city}
                dates={data.dates}
              />
            </Link1>
          ))}
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
/*
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'

export default function Results() {
  return (
    <>
      {products.map(product => (
        <MiniCard
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
      ))}
    </>
  )
}
*/
