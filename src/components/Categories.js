import styled from 'styled-components/macro'
import CategoryCard from './CategoryCard'
import { categories } from '../material/data/data.json'
import { Link } from 'react-router-dom'
import Head from './Head'

export default function Categories() {
  return (
    <>
      <Head title="Sport in deiner Nähe" />
      <CategoriesWrapper>
        {categories.map(category => (
          <Link to="/products">
            <CategoryCard
              id={category.id}
              title={category.title}
              icon={require(`../material/icons/${category.icon}`).default}
              altText={category.altText}
            />
          </Link>
        ))}
      </CategoriesWrapper>
    </>
  )
}

const CategoriesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 15px 10px;
`
