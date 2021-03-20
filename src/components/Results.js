import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'
import ResultsFilter from './ResultsFilter'

export default function Results({ userInput, setUserInput }) {
  return (
    <>
      <ResultsFilter userInput={userInput} setUserInput={setUserInput} />
      <ResultsWrapper>
        {products
          .filter(product =>
            product.city.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(product => (
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
      </ResultsWrapper>
    </>
  )
}

const ResultsWrapper = styled.section`
  display: grid;
  gap: 5px;
`
