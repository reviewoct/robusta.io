import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import TrainingSection from '../components/TrainingSection'
import AboutSection from '../components/AboutSection'
import TrainingPlan from '../components/TrainingPlan'
import MasalaSection from '../components/MasalaSection'
import GetStarted from '../components/GetStarted'
import BottomSection from '../components/BottomSection'   
import Copyright from '../components/Copyright'
 

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
 
      <Layout location={this.props.location} title={siteTitle}>
      <TrainingSection />
      <AboutSection />
      <TrainingPlan />
      <MasalaSection />
 
 
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      <section class="last-posts">
			<div class="container">
				<h2>Last Posts</h2>
				<div class="row">
					 
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div  class="col-sm-4" key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
              <Link  class="hide-read-more" to={node.fields.slug}>
                  {title}<div class="show-read-more">Read more</div> 
                </Link>
            </div>
          )
        })}
					 
				</div>
			</div>
		</section>

    <GetStarted />   
    <BottomSection />   
    <Copyright />  
     
     
         
      </Layout>
       
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
