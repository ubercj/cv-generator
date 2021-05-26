import React from 'react'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  return (
    <nav className="Navbar">
      <h1>CV Builder</h1>
      <a href="https://github.com/ubercj" className="github"><FontAwesomeIcon icon={faGithub} /></a>
    </nav>
  )
}

export default Navbar;