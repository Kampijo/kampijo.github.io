import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../App.css'
import ProfileImage from "../components/profile-image"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <div class="flex-container">
                <div class="info-container">
                    <ProfileImage />
                    <h1><span class="wave">👋</span> Hi, I'm Nygel.</h1>
                    <p>I am currently an Android Engineer at <a href="https://instagram.com/hawkerbae">Instagram</a>.</p>
                    <p>
                        I am a Computer Science graduate from the University of Toronto.
                    <br />
                    Previously at <a href="http://corp.flipp.com">Flipp</a> and <a href="http://hypercare.com">Hypercare</a>.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
