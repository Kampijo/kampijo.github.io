import React from "react"
import DefaultLink from "./default-link"
import LinksFooter from "./links-footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (!isRootPath) {
    header = (
      <DefaultLink className="header-link-home" to="/">
        {title}
      </DefaultLink>
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
