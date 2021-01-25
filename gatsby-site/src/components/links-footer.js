import React from "react"
import DefaultLink from "./default-link"

const LinksFooter = () => {
  return (
    <div class="links-container">
      <DefaultLink to={"/"}>Home</DefaultLink> | <DefaultLink to={"/blog"}>My Ramblings</DefaultLink>
      <br />
      <br />
      <a href="https://github.com/Kampijo"><img src="https://img.shields.io/badge/-Kampijo-black?style=flat&logo=github&logoColor=white" /></a>
      <a href="https://www.linkedin.com/in/nygellopez/"><img src="https://img.shields.io/badge/-nygellopez-blue?style=flat&logo=Linkedin&logoColor=white" /></a>
      <a href="https://instagram.com/tenmataylopez/"><img src="https://img.shields.io/badge/-@tenmataylopez-E1306C?style=flat&logo=instagram&logoColor=white" /></a>
      <a href="https://instagram.com/hawkerbae/"><img src="https://img.shields.io/badge/-@hawkerbae-E1306C?style=flat&logo=instagram&logoColor=white" /></a>
      <a href="https://open.spotify.com/user/12178320320"><img src="https://img.shields.io/badge/-Nygel%20Lopez-brightgreen?style=flat&logo=spotify&logoColor=white" /></a>
    </div>
  )
}

export default LinksFooter
