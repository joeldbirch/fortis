import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../images/inline/logo-ode.svg'
import {
  container,
  bodyText,
  smallText,
  button
} from '../styles/helpers'

const styles = {
  root: `
    👉 the-header
    ${container}
    background-color:green-400
    overflow:hidden
    flex-shrink:1
    position:relative
    flex-basis:hero-100
    max-height:container
  `,
  logo: `
    👉 the-logo
    color:neutral-900
    display:block
    height:auto
    width:60vmin
    position:absolute
    pos-top-left:50
    transform:-50
  `,
  content: `
    display:flex
    flex-direction:column
    padding:site-pad-200
    align-items:center
    justify-content:space-between
    position:absolute
    pos-top-left-bottom-right:0
    text-align:center
    color:neutral-0
  `
}

const Header = ({ className=``, siteTitle = ``, ctaClickHandler=()=>{} }) => (
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
        <header
          className={`
            ${styles.root}
            ${className}
          `}
          style={{
            maxHeight: `47.4875rem`,
          }}
        >

          <iframe
            allow="autoplay; fullscreen"
            allowFullScreen
            className={`
              position:absolute
              pos-top:50
              height:100
              @mq-max-desk-width--min-width:100
              @mq-max-desk--width:hero-100
              @mq-max-desk--max-width:container
              @mq-tall--min-width:100
              pos-left:50
              transform:-50
              max-width:container
              filter:darken
            `}
            frameBorder="0"
            height="1080"
            src="https://player.vimeo.com/video/373833397?background=1"
            style={{
              maxHeight: `47.4875rem`,
            }}
            title="ode-video"
            width="1920"
          >
          </iframe>

          <div className={`
            ${styles.content}
          `}>
            <div>
              <h2
                className={`
                  ${smallText}
                  padding-bottom:site-pad-100
                `}
              >
                589 Toorak Road, Toorak
              </h2>
              <h1
                className={`
                  ${bodyText}
                  @mq-lap-shallow--font-size:400
                `}
              >
                Experience the freedom of<br />low maintenance living in Toorak
              </h1>
            </div>
            <Logo
              className={`
                ${styles.logo}
              `}
              aria-label={siteTitle}
            />

            <button
              onClick={ctaClickHandler}
              className={`
                ${button}
              `}>
              More info
            </button>
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
