import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {

  return (
    <Layout title={"404?"}>
      <SEO title="404?" />
      <h4>Sorry... Were you looking for something?</h4>
      <p>Go back from whence you came! You shall not pass!</p>
    </Layout>
  )
}

export default NotFoundPage
