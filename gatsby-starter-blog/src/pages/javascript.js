
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JavascriptPage = () => (
  <Layout>
    <SEO title="JavascriptPage" />
    <h1>Hi from the JavascriptPage</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JavascriptPage