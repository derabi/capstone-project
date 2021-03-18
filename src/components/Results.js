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
