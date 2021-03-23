import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'

describe('Searchbar', () => {
  it('renders an input element', () => {
    render(<Searchbar />)
    expect(screen.getByPlaceholderText('Suche nach Stadt')).toBeInTheDocument()
  })
})
