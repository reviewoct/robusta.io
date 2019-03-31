import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from '../components/menu'
import tutorials from '../images/tutorials.png';
import logo from '../images/logo.png';
import calendar from '../images/calendar.png';
require('bootstrap/dist/css/bootstrap.min.css')

const Header = ({ siteTitle }) => (
  <header
    style={{
     
      marginBottom: `1.45rem`,
    }}
  >
        <Menu />
    <div
      
    >

 
 
 
 


<ul class="nav navbar-nav">
				<li> <a href="#"><img src={tutorials} alt="logo" /> Tutorials </a> </li>
				<li class="navbar-brand"> <a href="#"><img src={logo} alt="logo" /></a></li>
				<li> <a href="#"><img src={calendar} alt="logo" /> Calendar </a> </li>
			</ul>



    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
