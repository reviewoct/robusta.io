import React from 'react'
import target from '../../images/target.png';
import fork from '../../images/fork.png';
import caso from '../../images/case.png';
import Link from 'gatsby-link'
 

 

class MasalaSection extends React.Component {
  render() {
    return (
      
        <section className="fourth withborder">
		
        <div className="container">
            <h2>Masala Parser</h2>
            <div className="row">
            <div className="col-sm-4">
            <img src={target}  alt="" /> Goals
            
            </div>
            <div className="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div className="row">
            <div className="col-sm-4">
            <img src={fork}  alt="" /> Example
            
            </div>
            <div className="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div className="row">
            <div className="col-sm-4">
            <img src={caso}  alt="" /> Use Case
            
            </div>
            <div className="col-sm-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nostrud exercitation. 
            </div>
            </div>
            
            <div className="row">
            <div className="col-sm-8 col-sm-offset-4">
            < Link to="/" className="custombtn">More on Parsec</Link>
            </div>
            </div>
            
            
            
        </div>
    </section>
 
    )
  }
}

export default MasalaSection