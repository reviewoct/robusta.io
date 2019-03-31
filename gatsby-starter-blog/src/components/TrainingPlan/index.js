import React from 'react'
 
 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Section from '../Section'
import front from '../../images/front.svg';
import back from '../../images/back.svg';
import architect from '../../images/architecture.svg';
 

 

class TrainingPlan extends React.Component {
  render() {
    return (
      
       <section class="third withborder">
 
        <div class="container">
        <h2>Training</h2>         
            <div class="row">
            <div class="col-sm-4">
            <img src={front} />   Front
            
            </div>
            <div class="col-sm-8">
                <ul> 
                    <li><a href="">Angular</a> </li>
                    <li><a href="">React</a> </li>
                    <li><a href="">ES 2015</a> </li>
                    <li><a href="">npm</a> </li>
                    <li><a href="">more... </a> </li>
                </ul>
            </div>
            </div>
            
            <div class="row">
            <div class="col-sm-4">
            <img src={back} /> Back
            
            </div>
            <div class="col-sm-8">
                <ul> 
                    <li><a href="">Java 8 &amp; 9</a> </li>
                    <li><a href="">Java EE</a> </li>
                    
                </ul>				</div>
            </div>
            
            <div class="row">
            <div class="col-sm-4">
            <img src={architect} /> Architecture  
            
            </div>
            <div class="col-sm-8">
                <ul> 
                    <li><a href="">Clean Code</a> </li>
                    <li><a href="">Design Patterns</a> </li>
                    <li><a href="">Serverless</a> </li>
                    
                </ul>				</div>
            </div>
            
            
            
            
        </div>
    </section>
 
    )
  }
}

export default TrainingPlan