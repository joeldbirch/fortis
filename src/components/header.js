import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../images/inline/logo-ode.svg'
import { container, bodyText, smallText } from '../styles/helpers'
import { callbackify } from 'util'

const styles = {
  root: `
    👉 the-header
    ${container}
    background-color:green-400
    overflow:hidden
    flex-shrink:0
    position:relative
    padding-bottom:9/16
  `,
  logo: `
    👉 the-logo
    color:neutral-900
    display:block
    height:auto
    width:40
    position:absolute
    pos-top-left:50
    transform:-50
  `,
  content: `
    display:flex
    flex-direction:column
    padding:site-pad-100
    align-items:center
    justify-content:space-between
    position:absolute
    pos-top-left-bottom-right:0
    text-align:center
    color:neutral-0
  `
}

const minHeight = `100vh - 7vw`

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
        <header
          className={`
            ${styles.root}
            ${className}
          `}
          style={{
            minHeight: `calc(${minHeight})`,
          }}
        >


                <iframe
                  src="https://browseplay.com/player/auto-muted/36957f7e-2907-47c3-a707-6a54ad21a445?controls=0&loader=0&loop=1&autoplay=1&playsinline=1"
                  frameBorder="0"
                  title="ode-video"
                  width="1920"
                  height="1080"
                  className={`
                    opacity:70
                    position:absolute
                    pos-top:0
                    height:100
                    width:100
                    pos-left:50
                    translate-x:-50
                  `}
                  style={{
                    minWidth: `calc((${minHeight}) * 1.777777778)`,
                  }}
                  >
                </iframe>

            {/* <iframe
              src="https://player.vimeo.com/video/373047575?background=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
              title="ode-video"
              width="1920"
              height="1080"
              className={`
                width:100
                height:100
                position:absolute
              `}
              >
            </iframe> */}


          <div className={`
            ${styles.content}
          `}>
            <div>
              <h2
                className={`
                  ${smallText}
                `}
              >589 Toorak Road, Toorak</h2>
              <h1
                className={`
                  ${bodyText}
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
