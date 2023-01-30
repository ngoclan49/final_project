import React from 'react'
import { Link } from 'react-router-dom'
import { BsGlobe } from 'react-icons/bs'
import { FaUserCircle, FaBars } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
//css 
import '../../assets/css/navbar.css'

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex justify-content-between container">
        <div className="logoDiv">
          <Link to='' className='logo flex'>
            <img className='imageNav' src='https://links.papareact.com/qd3' alt="" />
          </Link>
        </div>
        <div className="navBar">
          <div className="flex">
            <p className='navBar-text'>Enjoy</p>
            <BsGlobe className='icon' />
            <Dropdown align="end">
              <Dropdown.Toggle  className="flex user bg-transparent ">
                <FaBars className='icon' />
                <FaUserCircle className='icon' />
              </Dropdown.Toggle>
              <Dropdown.Menu className='mt-2 dropDownMenu'>
                <Dropdown.Item className='dropDownItem' href="#/action-1">Sign up</Dropdown.Item>
                <Dropdown.Item className='dropDownItem' href="#/action-2">Log in</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className='dropDownItem' href="#/action-3">Airbnb your home</Dropdown.Item>
                <Dropdown.Item className='dropDownItem' href="#/action-4">Host an experience</Dropdown.Item>
                <Dropdown.Item className='dropDownItem' href="#/action-4">Help</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar