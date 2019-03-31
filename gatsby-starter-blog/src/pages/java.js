
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JavaPage = () => (
  <Layout>
    <SEO title="JavaPage" />
    <h1>Hi from the JavaPage</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JavaPage