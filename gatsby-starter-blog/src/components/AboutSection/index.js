import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Section from '../Section'
import nicolas from '../../images/portrait-Nicolas.jpg';
import emailimg from '../../images/email.png';
import smartphone from '../../images/smartphone.png';
require('bootstrap/dist/css/bootstrap.min.css')

 

class AboutSection extends React.Component {
  render() {
    return (
      <Section  >
      <div class="second withborder container">
				<div class="row">
					<div class="col-sm-8">
						<h2>About Nicolas Zozol</h2>
						<p>
						I am the founder of Robusta Code. I have a Physics and chemistry background as I was Science Teacher for kids in France and Boston, USA. I caught the coding virus
	in 2000, became a part-time coder in 2004 writing programs for my students then full-time in 2007, using and spreading REST in Toulouse, France. 
						</p>
						<p>
						I am Oracle Master Java Certified (or something like that) and Javascript early adopter.
	I work with other specialized freelances, and I use specialized Saas application to build your custom applications. This ensures delivery speed, nullify the cost of servers administration, and strongly reduces the risk of security attacks.
						</p>
					</div>
					
					<div class="col-sm-4">
					<img class="center-block" src={nicolas} alt="" />
					
						<div class="column-6 contacts">
						<p>JAVA / Javascript  </p>
						<p><img  src={emailimg} /> <a href="mailto:nz@robusta.io">nz@robusta.io</a> </p>
					<p><img src={smartphone} /> +33 6 33 91 85 04 </p>
					<script async="" defer="" src="https://buttons.github.io/buttons.js"></script>
							<dl class="stack">
								<a href="http://stackoverflow.com/users/968988/nicolas-zozol">
									<img src="http://stackoverflow.com/users/flair/968988.png" width="208" height="58" alt="profile for Nicolas Zozol at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Nicolas Zozol at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
								</a>
							</dl>
              <dl class="github">

 
<div>
 
  <a  class="github-button" href="https://github.com/nicolas-zozol" data-style="mega"
     data-count-href="/nicolas-zozol/followers" data-count-api="/users/nicolas-zozol#followers"
     data-count-aria-label=" # followers on GitHub" aria-label="Follow @nicolas-zozol on GitHub"><FaGithub />Follow
     @nicolas-zozol</a>
  <br/>
  <a class="github-button" href="https://github.com/d-plaindoux/parsec" data-icon="octicon-star"
     data-style="mega" data-count-href="/d-plaindoux/parsec/stargazers"
     data-count-api="/repos/d-plaindoux/parsec#stargazers_count"
     data-count-aria-label="# stargazers on GitHub"
     aria-label="Star /d-plaindoux/parsec on GitHub"><FaStar />Star</a>   


</div>
</dl>
						</div>
					</div>
				</div>
		</div> 
    </Section>
    )
  }
}

export default AboutSection