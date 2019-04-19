import React from 'react'
import HomeLayout from '../components/HomeLayout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import TrainingSection from '../components/TrainingSection'
import AboutSection from '../components/AboutSection'
import TrainingPlan from '../components/TrainingPlan'
import MasalaSection from '../components/MasalaSection'
import GetStarted from '../components/GetStarted'
import BottomSection from '../components/BottomSection'   
import Copyright from '../components/Copyright' 
 

const IndexPage = () => {
   
 
  return (
    <HomeLayout pageTitle="CodeBlog">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <TrainingSection />
      <AboutSection />
      <TrainingPlan />
      <MasalaSection />

      <section className="last-posts">
			<div className="container">
				<h2>Last Posts</h2>
				<div className="row">

      <StaticQuery
        query={indexQuery}
        render={data => {
          
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                />
              ))}
             
            </div>
          )
        }}
      />
				</div>
			</div>
		</section>
    <GetStarted />   
    <BottomSection />   
    <Copyright />  
     

    </HomeLayout>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
 
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
