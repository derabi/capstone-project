import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { options } from '../material/data/data.json'
import Searchbar from './Searchbar'

export default function ResultsPage({ userInput, setUserInput }) {
  return (
    <PageWrapper>
      <Searchbar userInput={userInput} setUserInput={setUserInput} />
      <ResultsWrapper>
        {options
          .filter(option =>
            option.city.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(option => (
            <MiniCard
              image={option.image}
              altText={option.altText}
              title={option.title}
              stars={option.stars}
              price={option.price}
              frequency={option.frequency}
              zip={option.zip}
              city={option.city}
              dates={option.dates}
            />
          ))}
      </ResultsWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  padding: 10px 5px 0;
  display: grid;
  gap: 10px;
`

const ResultsWrapper = styled.section`
  display: grid;
  gap: 5px;
`
