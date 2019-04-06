import PropTypes from "prop-types"
import React from "react"
import Menu from '../components/menu'
import Link from 'gatsby-link'
import tutorials from '../images/tutorials.png';
import logo from '../images/logo.png';
import calendar from '../images/calendar.png';
require('bootstrap/dist/css/bootstrap.min.css')

const Header = () => (
  <header
    style={{
     
      marginBottom: `1.45rem`,
    }}
  >
        <Menu />
    <div>

<ul className="nav navbar-nav">
				<li> < Link to="/"><img src={tutorials} alt="logo" /> Tutorials </Link> </li>
				<li className="navbar-brand"> < Link to="/"><img src={logo} alt="logo" /></Link></li>
				<li> < Link to="/"><img src={calendar} alt="logo" /> Calendar</Link> </li>
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
