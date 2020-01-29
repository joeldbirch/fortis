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
import { uiFontSize } from 'styles/helpers'
import 'styles/index.scss'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  ctaClickHandler,
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
          ${isIos() || isSafari() ? `is-safari` : ``}
          scroll-snap-type:y-proximity
          overflow-y:scroll
          grid-guide
        `}
        />
        <html className={`
          font-size:300
          @mq-lap--font-size:400
        `} lang="en" />

        <meta name="robots" content="noindex" />

      </Helmet>

      <TheHeader
        id="SiteHeader"
        className={`
          color:contrast
          transition-duration:400
        `}
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
          style={
            headerReversed
              ? { 'filter': 'invert(1) contrast(1.2)' }
              : {}
          }
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
              style={
                headerReversed
                  ? { 'filter': 'invert(1) contrast(1.2)' }
                  : {}
              }
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
  ctaClickHandler: PropTypes.func,
}

export default Layout
