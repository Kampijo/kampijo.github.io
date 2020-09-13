import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProfileImage from "../components/ProfileImage"
import '../App.css'
import QuoteCycler from "../components/QuoteCycler"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br />
    <br />
    <div class="flex-container">
      <div class="info-container">
        <h1><span role="img">👋</span> Hi, I'm Nygel.</h1>
        <p>I am an Android Engineer at <a href="https://about.instagram.com/about-us">Instagram</a>.</p>
        <QuoteCycler />
        <p>
          I am a Computer Science graduate from the University of Toronto.
          <br />
          Previously at <a href="http://corp.flipp.com">Flipp</a> and <a href="http://hypercare.com">Hypercare</a>.
        </p>
      </div>
      <div class="profile-image-container">
        <ProfileImage />
      </div>
    </div>
    <div style={{ marginBottom: `1.45rem` }}>
      <h3>Wanna learn more?</h3>
      Find me on <a href="https://github.com/Kampijo">Github</a> | <a href="https://linkedin.com/in/nygellopez">LinkedIn</a>
    </div>
  </Layout>
)

export default IndexPage
