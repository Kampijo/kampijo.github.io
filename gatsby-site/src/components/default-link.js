import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

/*
 * This component just contains the default props for how I want to transition between my pages
 */

const DefaultLink = props => (
    <AniLink
        cover
        to={props.to}
        bg="#00897B"
        duration={1}
    >
        {props.children}
    </AniLink>
)

export default DefaultLink