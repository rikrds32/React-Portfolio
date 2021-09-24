import React from 'react';
import logo from "../logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#"><img src={logo} alt="logo..."/></a>
      <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span ClassName="navbar-toggler-icon"></span>
      </button>

      <div clasName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link"  href="#aboutme"
          onClick={() => ('aboutme')} >About me <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact"
          onClick={() => ('contact')} >Contact Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar