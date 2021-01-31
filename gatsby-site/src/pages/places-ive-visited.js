import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorldMap from "../components/worldmap"

const PlacesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Places I've Visited" />
      <WorldMap />
    </Layout >
  )
}

export default PlacesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`