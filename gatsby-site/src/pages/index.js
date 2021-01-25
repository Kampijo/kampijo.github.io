import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../style.css'
import ProfileImage from "../components/profile-image"
import { graphql } from 'gatsby'

const IndexPage = ({ data, location }) => {
    const bio = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Home" />
            <ProfileImage />
            <div className="info-container">
                <section className="bio"
                    dangerouslySetInnerHTML={{ __html: bio.html }}
                    itemProp="articleBody"
                />
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: "biography"} }) {
        html
    }
  }
`
