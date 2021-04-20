import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'

export default function Navigation() {
  const [activeIcon, setActiveIcon] = useState(1)

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <Nav>
        <NavButton
          as={NavLink}
          exact
          to="/"
          style={{ color: '#000' }}
          onClick={() => setActiveIcon(1)}
        >
          {activeIcon === 1 ? <AiFillHome /> : <AiOutlineHome />}
          Home
        </NavButton>
        <NavButton
          as={NavLink}
          to="/watch"
          style={{ color: '#000' }}
          onClick={() => setActiveIcon(2)}
        >
          {activeIcon === 2 ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
          Watch
        </NavButton>
        <NavButton
          as={NavLink}
          to="/bookings"
          style={{ color: '#000' }}
          onClick={() => setActiveIcon(3)}
        >
          {activeIcon === 3 ? <AiFillCalendar /> : <AiOutlineCalendar />}
          Events
        </NavButton>
        <NavButton
          as={NavLink}
          to="/profil"
          style={{ color: '#000' }}
          onClick={() => setActiveIcon(4)}
        >
          {activeIcon === 4 ? <BsFillPersonFill /> : <BsPerson />}
          Profile
        </NavButton>
      </Nav>
    </IconContext.Provider>
  )
}

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  height: 48px;
  background: #fff;
  box-shadow: 0 0 3px;
`

const NavButton = styled.button`
  display: grid;
  font-size: 12px;
  gap: 3px;
  justify-items: center;
  text-decoration: none;
`
