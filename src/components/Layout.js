/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery hook
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import useHeaderIntersection from 'hooks/use-header-intersection'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import TheWrap from './TheWrap'
import Menu from './Menu'
import Main from './TheMain'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { isSafari, isIos } from 'utilities/helpers'
import { uiFontSize, getInvertedStyles } from 'styles/helpers'
import fixOutline from 'fix-outline'
import fps from 'vendor/60fps-scroll-element'

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

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) {
      fixOutline()
      if (!isIos) fps(document.querySelector(`.the-wrap`))
    }
  }, [])

  const headerStyles = {
    reversed: {
      transition: `background-color 0.5s 0s, backdrop-filter 0.5s 0s`,
      backgroundColor: `rgba(255, 255, 255, 0)`,
      backdropFilter: `blur(0) saturate(1)`,
    },
    notReversed: {
      transition: `background-color 2s 1s, backdrop-filter 1s 3s`,
      backgroundColor: `rgba(255, 255, 255, .95)`,
      backdropFilter: `blur(2px) saturate(2)`,
    },
  }

  return (
    <TheWrap
      id="TheWrap"
      className={`
        👉 the-wrap
        ${className}
          height:100vh-fixed
          overflow-y:scroll
          scroll-behavior:smooth
      `}
      {...props}
    >
      <Helmet>
        <style>{`
          html,
          body,
          [id="___gatsby"],
          [id="gatsby-focus-wrapper"] {
            height: 100%;
          }
        `}</style>
        <body className={`
        `}
        />
        <html className={`
          @mq-lap--font-size:400
          @mq-bigdesk--font-size:fluid-bigdesk
        `} lang="en" />

        <meta name="robots" content="noindex" />

      </Helmet>

      <TheHeader
        id="SiteHeader"
        style={headerStyles[headerReversed ? `reversed` : `notReversed`]}
      >
        <Link
          to="/"
          className={`
            color:inherit
            &:hover--text-decoration:underline
            &:before--hit-area-xy-100
            position:relative
            pointer-events:auto
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
                @mq-max-palm--text-align:center
                @mq-palm--padding-left:columns-3-1/2
                @mq-palm--padding-right:columns-1-1/2
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
