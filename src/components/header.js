import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../images/inline/logo-bower.svg'
import { container, subhead } from '../styles/helpers'

const styles = {
  root: `
    👉 the-header
    background-color:transparent
    pos-top:0
    position:fixed
    z-index:200
  `,
  logoLink: `
    @mq-lap--margin-top:0
    @mq-lap--width:30
    display:table
    margin-top:-220vw
    position:relative
    &:before--shim-24
    width:50
  `,
  logo: `
    👉 the-logo
    color:neutral-900
    display:block
    height:100
    position:absolute
    width:100
  `,
  headerNav: `
    👉 header-nav
    color:orange-400
    &:hocus--text-decoration:underline
    position:relative
    &:before--hit-area-xy-200
    is-home__display:none
    @mq-max-lap--font-size:200
    @mq-max-lap--margin-bottom:300
    ${subhead}
  `,
}

const Header = ({ className, siteTitle = `` }) => (
  <StaticQuery
    query={graphql`
      query pathnameQuery {
        sitePage {
          path
        }
      }
    `}
    render={data => {
      return (
        <header className={`${styles.root} ${className}`}>
          <div className={`
            ${container}
            display:flex
            padding-top:600
            align-items:center
            justify-content:space-between
          `}>
            <Link to="/" className={styles.logoLink}>
              <Logo className={styles.logo} aria-label="Bower by Fortis" />
            </Link>

            <Link to="/register/#enquiries" className={`${styles.headerNav}`}>
              Enquire now
            </Link>
          </div>
        </header>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
