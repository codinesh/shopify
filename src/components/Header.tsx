import React, { useEffect } from 'react'
import '../assets/styles/App.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserDetails from './UserDetails'

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Navbar.Brand href='#home'>PMS</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/home' className='nav-link'>
              Home
            </Link>

            <Link to='/about' className='nav-link'>
              About
            </Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <UserDetails name={'Dinesh'} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
