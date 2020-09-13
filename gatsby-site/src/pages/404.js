import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <br />
    <br />
    <br />
    <SEO title="404" />
    <div style={{
      textAlign: 'center',
      display: 'block',
    }}>
      <p style={{
        fontWeight: 'bold',
        fontSize: '600%',
      }}>404</p>
      <br />
      <br />
      <h4>Sorry... Were you looking for something?</h4>
      <p>Go back from whence you came! You shall not pass!</p>
    </div>
    <br />
  </Layout>
)

export default NotFoundPage
