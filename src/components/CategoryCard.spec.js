import { render, screen } from '@testing-library/react'
import CategoryCard from './CategoryCard'
import '@testing-library/jest-dom'

import icon from '../material/icons/fussballIcon.svg'

describe('CategoryCard', () => {
  it('renders a card with title, image and altText', () => {
    render(
      <CategoryCard
        categoryTitle="testTitle"
        categoryIcon={icon}
        categoryIconAltText="testAltText"
      />
    )
    expect(screen.getByText('testTitle')).toBeInTheDocument()
    expect(screen.getByAltText('testAltText')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
