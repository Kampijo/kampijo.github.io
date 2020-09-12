import React from "react"

import { rhythm, scale } from "../utils/typography"
import LinksFooter from "./links-footer"

const Layout = ({ title, children }) => {
  let header
  header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      {title}
    </h1>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {title &&
        <header>{header}</header>
      }
      <main>{children}</main>
      <footer>
        <LinksFooter />
      </footer>
    </div>
  )
}

export default Layout
