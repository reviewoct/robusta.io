import React from 'react'
import Link from 'gatsby-link'
 
 

const Menu = () => (
  <div    className="navbar-style"  >
    <ul  
      className="navbar-top"
    >
      <li >
        < Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/training">TRAINING</Link>
      </li>
      <li>
        <Link to="/java">JAVA</Link>
      </li>
      <li>
        <Link to="/javascript">JAVASCRIPT</Link>
      </li>
      <li>
        <Link to="/serverless">SERVERLESS</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  </div>
)

export default Menu
