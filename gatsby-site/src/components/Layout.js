import React from "react"
import DefaultLink from "./default-link"
import LinksFooter from "./links-footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const worldMapPath = `${__PATH_PREFIX__}/places-ive-visited`

  const isRootPath = location.pathname === rootPath
  const isWorldMap = location.pathname === worldMapPath
  let header

  if (!isRootPath) {
    header = (
      <DefaultLink className="header-link-home" to="/">
        {title}
      </DefaultLink>
    )
  }

  return (
    <div>
      {header && <header className="global-header">{header}</header>}
      <main className="global-main" data-is-root-path={isRootPath} data-is-world-map={isWorldMap}>{children}</main>
      <footer className="global-footer">
        <LinksFooter />
      </footer>
    </div>
  )
}

export default Layout
