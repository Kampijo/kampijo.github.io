import React from "react"
import { Link } from "gatsby"
import LinksFooter from "./links-footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (!isRootPath) {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header && <header className="global-header">{header}</header>}
      <main>{children}</main>
      <footer>
        <LinksFooter />
      </footer>
    </div>
  )
}

export default Layout
