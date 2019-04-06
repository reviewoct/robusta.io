import React from 'react'
import Header from './header' 
import '../styles/layout.css'
 

class Layout extends React.Component {
  render() {
    const {  children } = this.props

    return (
      <div >
         
         <Header  />
         <div  className="first"> 
        <main>{children}</main>
        </div>

      </div>
    )
  }
}

export default Layout
