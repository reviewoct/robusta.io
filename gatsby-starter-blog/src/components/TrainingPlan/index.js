import React from 'react'
import front from '../../images/front.svg';
import back from '../../images/back.svg';
import architect from '../../images/architecture.svg';
import Link from 'gatsby-link' 

 

class TrainingPlan extends React.Component {
  render() {
    return (
      
       <section className="third withborder">
 
        <div className="container">
        <h2>Training</h2>         
            <div className="row">
            <div className="col-sm-4">
            <img src={front}  alt="" />   Front
            
            </div>
            <div className="col-sm-8">
                <ul> 
                    <li>< Link to="/">Angular</Link> </li>
                    <li>< Link to="/">React</Link> </li>
                    <li>< Link to="/">ES 2015</Link> </li>
                    <li>< Link to="/">npm</Link> </li>
                    <li>< Link to="/">more... </Link> </li>
                </ul>
            </div>
            </div>
            
            <div className="row">
            <div className="col-sm-4">
            <img src={back}  alt="" /> Back
            
            </div>
            <div className="col-sm-8">
                <ul> 
                    <li>< Link to="/">Java 8 &amp; 9</Link> </li>
                    <li>< Link to="/">Java EE</Link> </li>
                    
                </ul>				</div>
            </div>
            
            <div className="row">
            <div className="col-sm-4">
            <img src={architect}  alt="" /> Architecture  
            
            </div>
             <div className="col-sm-8">
                <ul> 
                    <li>< Link to="/">Clean Code</Link> </li>
                    <li>< Link to="/">Design Patterns</Link> </li>
                    <li>< Link to="/">Serverless</Link> </li> 
                </ul>
             </div>  
            </div>
            
            
            
            
        </div>
    </section>
 
    )
  }
}

export default TrainingPlan