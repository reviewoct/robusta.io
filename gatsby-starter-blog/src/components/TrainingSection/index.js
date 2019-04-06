import React from 'react'
import Section from '../Section'
import Link from 'gatsby-link'
 

class TrainingSection extends React.Component {
  render() {
    return (
      <Section  >
        <div className=" backgr ">
        <div className="container backgr ">
        <div className="col-sm-4">
					<h2>TRAINING</h2>
					<p>Robusta Code has given state of the art trainings for more than 5 years. Always customized, updated and improved. </p>
					<ul>
             <li>Angular 2+</li>
             <li>Java 8</li>
             <li>Clean Code</li>
             <li>Design Patterns</li>
          </ul>
 
          < Link to="/" className="custombtn">All Trainings</Link>
				</div>

                <div className="col-sm-4">
					<h2>CODING</h2>
					<p>Training without coding is nonsense. We deliver for customers,
             code Open Source projects, or public applications. </p>
					<ul>
            <li>Protofolio</li>
            <li>Masala Parser</li>
            <li>Github</li>
          </ul>
          < Link to="/" className="custombtn">VIEW ALL</Link>
				</div>


                <div className="col-sm-4">
					<h2>THINKING</h2>
					<p>Coding is not more complicated today, but options are overloaded. 
           We think at minimum complexity for maximum scaling, using general
           Platform like Firebase or AWS and ultra-specialized PDF exporter.</p>
					<ul>
						<li>Serverlerss</li>
						<li>Microservices</li>
						<li>Firebase</li>
					</ul>
          < Link to="/" className="custombtn">VIEW ALL</Link>
         
				</div>              

        
       
        </div>
         
        </div>
      </Section>
    )
  }
}

export default TrainingSection