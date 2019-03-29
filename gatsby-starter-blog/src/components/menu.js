import React from 'react'
import Link from 'gatsby-link';
 
const Menu = () =>  (
<div style={{
    background: '#f4f4f4f',
    paddingTop: '10px'
}}>
  <ul style={{
      listStyle:'none',
      display: 'flex',
      justifyContent: 'space-evenly'
  }}>
    <li>  <Link to="/">Home</Link> </li>
    <li>  <Link to="/about">About Us</Link> </li>
    <li>  <Link to="/services">Services</Link> </li>
    <li>  <Link to="/">Zawjaati</Link> </li>
    <li>  <Link to="/">Ibnati</Link> </li>
  </ul>
</div>
)   
 

export default Menu
