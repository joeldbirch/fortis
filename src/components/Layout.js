/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery hook
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import TheWrap from './TheWrap'
import Menu from './Menu'
import Main from './TheMain'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { isIos, isSafari } from '../utilities/helpers'
import { uiFontSize } from '../styles/helpers'
import '../index.scss'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  ctaClickHandler,
  ...props
}) => {


  function bodyClasses() {
    return `${isIos() || isSafari() ? `is-safari` : ``} `
  }

  function htmlClasses() {
    return ``
  }

  const [menuOpen, toggleMenu] = useState(false)

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
          ${bodyClasses()}
        `} />
        <html className={htmlClasses()} lang="en" />
      </Helmet>

      <TheHeader>
        <Link
          to="/"
          className={`
            color:neutral-900
            &:hocus--text-decoration:underline
            &:before--hit-area-xy-100
            position:relative
            pointer-events:auto
          `}
        >
          <h1
            className={`
              ${uiFontSize}
            `}
          >
            Fortis
          </h1>
        </Link>
        <Menu toggleHandler={toggleMenu} isOpen={menuOpen} className="pointer-events:auto" />
      </TheHeader>

      <Main>
        {children}
      </Main>

      <TheFooter className={``} />

    </TheWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
  ctaClickHandler: PropTypes.func,
}

export default Layout
