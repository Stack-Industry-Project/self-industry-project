import React from 'react';
import './Header.css';
import { Navbar, Navbar2 } from '../../common'

const Header = () => {
  return (
    <section className='header'>
      <section className='header-box'>
        <section className='header__logo'>
          <a href='https://www.self.inc/'>
            <img src='https://www.self.inc/static/Self_Logo_Header.svg' alt="" />
          </a>
        </section>
        <section className='header__navbar'>
          <Navbar />
        </section>
        <section className='header__navbar2'>
          <Navbar2 />
        </section>
        <section className='button'>
          <a href='https://www.self.inc/#quick-signup'> Start Building Today</a>
        </section>
      </section>
    </section>
  )
}

export default Header;