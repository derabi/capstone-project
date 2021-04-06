import styled from 'styled-components/macro'
import logo from '../material/images/OlympixLogo.svg'

export default function Head({ title }) {
  return (
    <Header>
      <HeaderWrapper>
        <Logo src={logo} alt="" width="125" height="25" />{' '}
        {title && <span>•</span>} {title}
      </HeaderWrapper>
    </Header>
  )
}

const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 99;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 0 3px;
  font-size: 14px;
  color: #000;
`

const Logo = styled.img`
  height: 25px;
  width: auto;
`
