import React, { useState } from 'react'
import  '../styles/Navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(true);
  return (
    <React.Fragment>
       <nav id={toggle ? 'nav' : 'navBarColor'}>
           <h1 id={toggle ? 'nav-logo' : 'nav-logoColor'}>DEVFOLIO</h1>
           <div id='nav-links'>
            <ul>
                <li><a href="/" className='active' id={toggle ? 'anchor-links' : 'anchor-links-b'}>Home</a></li>
                <li><a href="/About" id={toggle ? 'anchor-links' : 'anchor-links-b'}>About</a></li>
                <li><a href="/Contact" id={toggle ? 'anchor-links' : 'anchor-links-b'}>Contact</a></li>
                <li><a href="/Projects" id={toggle ? 'anchor-links' : 'anchor-links-b'}>Projects</a></li>
            </ul>
           </div>
           <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                 <div id={toggle? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
        </div>
       </nav>
    </React.Fragment>
  )
}

export default Navbar