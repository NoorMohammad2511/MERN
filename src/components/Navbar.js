import React from 'react';
import Logo from "../images/tourLogo.png"

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            <img src={Logo}/>
        </div>

        <div className="rightside"></div>
    </div>
  )
}

export default Navbar
