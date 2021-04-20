import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'
import ResultsFilter from './ResultsFilter'
import { Link } from 'react-router-dom'

import { AiFillPlusCircle } from 'react-icons/ai'

import Head from './Head'

const Profil = () => {
  return (
    <div>
      <Head title="Profil" />
      <div>
        <CreateTitle>Erstelle ein neues Event</CreateTitle>
        <div>
          <Link to="/create">
            <CreateIcon size="50px" />
          </Link>
        </div>
      </div>
      <div>
        <ResultsWrapper>
          {products.map(product => {
            if (product.creatorId === 1) {
              return (
                <Link1 to={`/products/${product.id}`}>
                  <MiniCard
                    image={
                      require(`../material/images/fussball/${product.image}`)
                        .default
                    }
                    altText={product.altText}
                    title={product.title}
                    stars={product.stars}
                    price={product.price}
                    frequency={product.frequency}
                    zip={product.zip}
                    city={product.city}
                    dates={product.dates}
                  />
                </Link1>
              )
            }
          })}
        </ResultsWrapper>
      </div>
    </div>
  )
}

export default Profil

const ResultsWrapper = styled.section`
  display: grid;
  gap: 5px;
  margin: 0 5px;
`
const Link1 = styled(Link)`
  text-decoration: none;
`

const CreateTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 30px 0 20px;
  text-align: center;
`

const CreateIcon = styled(AiFillPlusCircle)`
  margin-left 165px;
  margin-bottom: 30px;
  color: black;
`
