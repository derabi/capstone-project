import styled from 'styled-components/macro'
import logo from '../material/images/OlympixLogo.svg'

export default function Head() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="" width="125" height="25" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 0.1px 5px;
`

const Logo = styled.img`
  height: 25px;
  width: auto;
`
