import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <nav>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/about">About</Link>
        {' '}
        <Link to="/contact">Contact</Link>
        {' '}
        <Link to="/services">Towing Services</Link>
      </nav>
      <figure>
        <img src="" alt="i'm a huge header_image" />
      </figure>
    </header>
  )
}

export default Header;
