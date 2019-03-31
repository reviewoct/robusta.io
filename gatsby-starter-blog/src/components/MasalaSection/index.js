import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Section from '../Section'
import target from '../../images/target.png';
import fork from '../../images/fork.png';
import caso from '../../images/case.png';
 

 

class MasalaSection extends React.Component {
  render() {
    return (
      
        <section class="fourth withborder">
		
        <div class="container">
            <h2>Masala Parser</h2>
            <div class="row">
            <div class="col-sm-4">
            <img src={target} /> Goals
            
            </div>
            <div class="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div class="row">
            <div class="col-sm-4">
            <img src={fork} /> Example
            
            </div>
            <div class="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div class="row">
            <div class="col-sm-4">
            <img src={caso} /> Use Case
            
            </div>
            <div class="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div class="row">
            <div class="col-sm-8 col-sm-offset-4">
            <a href="#" class="custombtn">More on Parsec </a>
            </div>
            </div>
            
            
            
        </div>
    </section>
 
    )
  }
}

export default MasalaSection