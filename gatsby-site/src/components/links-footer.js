import React from "react"
import { Link } from "gatsby"

const LinksFooter = () => {
  return (
    <div class="links-container">
      <Link to={"/"}>Home</Link> | <a href="https://github.com/Kampijo">GitHub</a> | <a href="https://linkedin.com/in/nygellopez">LinkedIn</a> | <Link to={"/my-ramblings"}>My Ramblings</Link>
    </div>
  )
}

export default LinksFooter
