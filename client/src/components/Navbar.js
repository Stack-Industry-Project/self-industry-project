import React from 'react';

const Navbar = () => {
  return (
    <div id="nav-container">
      <nav className="nav">
        <div className="nav-left">
          <a href='https://www.self.inc/'>
            <img src='https://www.self.inc/static/Self_Logo_Header.svg' alt="" />
          </a>
          <div className="nav-left-links-container">
            <button className="nav-link">LEARN</button>
            <button className="nav-link">ABOUT</button>
            <button className="nav-link">RESOURCES</button>
            <button className="nav-link">GET $20</button>
            <button className="nav-link">HELP</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-link">LOG IN</button>
          <div className="sign-up-btn">
            <a className="nav-link" href='https://www.self.inc/#quick-signup'>START BUILDING TODAY</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;