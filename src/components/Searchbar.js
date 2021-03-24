import styled from 'styled-components/macro'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Searchbar({ userInput, setUserInput }) {
  return (
    <InputLabel>
      <Input
        placeholder="Suche nach Stadt"
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
      />
      <SearchIcon />
    </InputLabel>
  )
}

const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`
const Input = styled.input`
  background-color: #eee;
  border: none;
  width: 100%;
  padding: 10px 30px;
  font-size: 14px;
  outline: none;
`

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
  color: #000;
  margin-left: 5px;
  position: absolute;
`
