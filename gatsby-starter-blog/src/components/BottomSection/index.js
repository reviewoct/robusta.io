import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Section from '../Section'
import logobottom from '../../images/logo-bw.png';  
import smartf from '../../images/smartphone.png';  
import email from '../../images/email.png';
 
 

 

class BottomSection extends React.Component {
  render() {
    return (
      
        <section class="bottom">
        <div class="container">
            <div class="col-sm-4">
                <img src={logobottom}  alt="" class="center-block" />  
            </div>   
            
            <div class="col-sm-4">
                <div class="row-fluid">
                    <div class="col-xs-4 col-sm-3">
                        <p><strong>LINKS</strong></p>
                    </div>
                    <div class="col-xs-8 col-sm-9">
                        <ul>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Calendar</a></li>
                            <li><a href="#">Training</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">Serverless</a></li>
                                                                                                                        
                    </ul></div>
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="row-fluid">
                    <div class="col-xs-4 col-sm-3">
                        <p><strong>CONTACT</strong></p>
                    </div>
                    <div class="col-xs-8 col-sm-9">
                        <p>
                            <img src={smartf} alt="" /> 
                            +33 6 33 91 85 04
                        </p>
                        <p>
                        <img  src={email} alt="" />   
                        <a href="mailto:nz@robusta.io">nz@robusta.io</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    )
  }
}

export default BottomSection