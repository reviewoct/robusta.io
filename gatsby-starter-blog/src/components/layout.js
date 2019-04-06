import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import BottomSection from '../components/BottomSection'   
import Copyright from '../components/Copyright' 
import Sidebar from './Sidebar'

 

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <div className="row">
          <div className="col-sm-8">{children} </div>
          <div className="col-sm-4">
          <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
          </div>
           
        </div>
        </div>
        <BottomSection />   
        <Copyright />  
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
