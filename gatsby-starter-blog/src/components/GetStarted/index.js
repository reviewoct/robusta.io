import React from 'react'
import browserpng from '../../images/browser.png';
import coding from '../../images/coding.png';
import Link from 'gatsby-link'
 
 

 

class GetStarted extends React.Component {
  render() {
    return (
      
        <section className="get-started">
			<div className="container">
				<div className="col-sm-3">
					<img src={browserpng} alt="browser" />   
				</div>
				<div className="col-sm-6">
					<p>Whether you need to better Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					< Link to="/" className="custombtn coloredbg">Get Started</Link>

				</div>
				<div className="col-sm-3">
					<img src={coding} alt="browser" />   
				</div>
				
			</div>
		</section>
 
    )
  }
}

export default GetStarted