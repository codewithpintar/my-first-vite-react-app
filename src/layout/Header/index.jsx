import React, { Fragment } from 'react'
import '../../../styles/components/header.css'

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <navbar className="navigation">
            <div className="logo">
              <h4><span style={{ color: "#297cf4", }}>Brand</span> Logo</h4>
            </div>
            <ul className='menu-list'>
              <li>Home</li>
              <li>About Us</li>
              <li className='dropdown'>
                <span className="label">Services&nbsp;</span>
                <ul className='submenu'>
                  <li>Services 1</li>
                  <li>Services 2</li>
                  <li>Services 3</li>
                  <li>Services 4</li>
                  <li>Services 5</li>
                </ul>
              </li>
              <li>Clients</li>
              <li>Contact Us</li>
              <li className='loginBtn'>Login / Register</li>
            </ul>
          </navbar>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
