/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { isIos, isSafari } from '../utilities/helpers'
import TheWrap from './TheWrap'
import Header from './header'
import '../index.scss'
import fixOutline from 'fix-outline'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  ...props
}) => {
  function bodyClasses() {
    return `${isIos() || isSafari() ? `is-safari` : ``} grid-guide `
  }

  function htmlClasses() {
    return `padding-horizontal:site-pad-100`
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        if (`undefined` !== typeof window) fixOutline()
        className += ` 👉 the-wrap`
        return (
          <TheWrap className={className} id="TheWrap" {...props}>
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
              <body className={bodyClasses()} />
              <html className={htmlClasses()} />
            </Helmet>
            <Header
              siteTitle={data.site.siteMetadata.title}
              className={headerClassName}
            />
            <div className="flex-grow:1 flex-shrink:0 display:flex flex-direction:column">
              {children}
            </div>
          </TheWrap>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
}

export default Layout
