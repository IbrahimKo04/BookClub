import React from "react";
import './Navbar.css'
const Navbar = ()=>{
 return(
    <>
    <header className="header">
        <div className="logo">
          <h1 className="club-name">Book</h1>
        </div>
        <nav className="nav-bar">
          <a href="#home">Home</a>
          <a href="#community">Community</a>
          <a href="#search">Search</a>
          <a href="#login" className="login-btn">Log in</a>
        </nav>
      </header>
    
    </>
 )
}


export default Navbar;