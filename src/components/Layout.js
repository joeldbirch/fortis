/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery hook
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useHeaderIntersection from 'hooks/use-header-intersection'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import TheWrap from './TheWrap'
import Menu from './Menu'
import Main from './TheMain'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { isIos, isSafari } from 'utilities/helpers'
import { uiFontSize, getInvertedStyles } from 'styles/helpers'

import 'styles/index.scss'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  AddToHeader,
  scrollStrict=false,
  ...props
}) => {

  const [menuOpen, toggleMenu] = useState(false)
  const [headerReversed] = useHeaderIntersection()


  return (
    <TheWrap
      id="TheWrap"
      className={`
        👉 the-wrap
        ${className}
      `}
      {...props}
    >
      <Helmet>
        <style>
          {`
          html,
          body,
          [id="___gatsby"],
          [id="___gatsby"]>[role="group"] {
            height: 100%;
          }
        `}
        </style>
        <body className={`
          ${
            // Safari just can't handle the truth about scroll snapping
            // in combination with its error-prone nav hiding and vh units
            isIos() || isSafari()
            ? `
                is-safari
                scroll-behavior:smooth
              `
            : `
                overflow-y:scroll
                ${scrollStrict
                  ? `scroll-snap-type:y-mandatory`
                  : `scroll-snap-type:y-proximity`
                }
              `
          }
          min-height:100vh-fixed
        `}
        />
        <html className={`
          font-size:300
          @mq-lap--font-size:400
          min-height:100vh-fixed
        `} lang="en" />

        <meta name="robots" content="noindex" />

      </Helmet>

      <TheHeader
        id="SiteHeader"
      >
        <Link
          to="/"
          className={`
            color:inherit
            &:hocus--text-decoration:underline
            &:before--hit-area-xy-100
            position:relative
            pointer-events:auto
            underlined
            underlined--thin
            underlined-reveal
            ${uiFontSize}
          `}
          style={getInvertedStyles(headerReversed)}
        >
          Fortis
        </Link>
        { !AddToHeader
          ? ``
          : (
            <div
              className={`
                padding-left:columns-3-1/2
                padding-right:columns-1-1/2
                width:100
                position:absolute
                pos-left:50
                translate-x:-50
              `}
              style={getInvertedStyles(headerReversed)}
            >
              {AddToHeader}
            </div>
          )
        }
        <Menu headerReversed={headerReversed} toggleHandler={toggleMenu} isOpen={menuOpen} className="pointer-events:auto" />
      </TheHeader>

      <Main
        style={{
          '--guides-max-width': '100rem',
          '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
          '--position': 'absolute'
        }}
      >
        {children}
      </Main>

      <TheFooter className={`
        scroll-snap-align:end
      `} />

    </TheWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
}

export default Layout
