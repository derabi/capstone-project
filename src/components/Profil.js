import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'
import ResultsFilter from './ResultsFilter'
import { Link } from 'react-router-dom'

const Profil = () => {
  return (
    <div className="profil">
      <div className="profil-obere-box">
        <div className="profil-obere-box-links">Dein Profil</div>
        <div className="profil-obere-box-rechts">
          <Link to="/create">
            <button className="profil-erstellen-button">Event erstellen</button>
          </Link>
        </div>
      </div>
      <hr />
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
`
const Link1 = styled(Link)`
  text-decoration: none;
`
