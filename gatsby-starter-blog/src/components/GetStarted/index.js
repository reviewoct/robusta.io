import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Section from '../Section'
import browserpng from '../../images/browser.png';
import coding from '../../images/coding.png';
 
 

 

class GetStarted extends React.Component {
  render() {
    return (
      
        <section class="get-started">
			<div class="container">
				<div class="col-sm-3">
					<img src={browserpng} alt="browser" />   
				</div>
				<div class="col-sm-6">
					<p>Whether you need to better Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					<a class="custombtn coloredbg">Get Started</a>

				</div>
				<div class="col-sm-3">
					<img src={coding} alt="browser" />   
				</div>
				
			</div>
		</section>
 
    )
  }
}

export default GetStarted