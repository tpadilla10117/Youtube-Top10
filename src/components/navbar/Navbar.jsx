import React from 'react';
import YoutubeDark from '../../assets/logos/youtubeDark.png';

function Navbar() {
  return (
    <nav className="navbar">
        <img src={YoutubeDark} alt="The Youtube logo" className="navbar-img" />
    </nav>
  )
}

export default Navbar;