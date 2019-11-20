import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './image'
import Logo from '../images/inline/logo-ode.svg'
import {
  container,
  largeText,
  smallText,
  button
} from '../styles/helpers'

const styles = {
  root: `
    👉 the-header
    ${container}
    background-color:green-400
    flex-basis:hero-100
    flex-shrink:1
    max-height:container
    overflow:hidden
    position:relative
  `,
  logo: `
    👉 the-logo
    color:neutral-900
    display:block
    height:auto
    max-width:33rem
    pos-top-left:50
    position:absolute
    transform:-50
    width:60vmin
  `,
  content: `
    align-items:center
    color:neutral-0
    display:flex
    flex-direction:column
    justify-content:space-between
    padding:site-pad-200
    pos-top-left-bottom-right:0
    position:absolute
    text-align:center
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
          <Image
            className={`
              @mq-max-desk--max-width:container
              @mq-max-desk--width:hero-100
              @mq-max-desk-width--min-width:100
              @mq-tall--min-width:100
              filter:darken
              max-width:container
              min-height:100
              pos-left:50
              pos-top:50
              position:absolute
              transform:-50

              width:100
            `}
            name="poster"
            style={{
              position: `absolute`,
            }}
          />

          <iframe
            allow="autoplay; fullscreen"
            allowFullScreen
            className={`
              @mq-max-desk--max-width:container
              @mq-max-desk--width:hero-100
              @mq-max-desk-width--min-width:100
              @mq-tall--min-width:100
              filter:darken
              max-width:container
              min-height:100
              pos-left:50
              pos-top:50
              position:absolute
              transform:-50
            `}
            frameBorder="0"
            height="1080"
            src="https://player.vimeo.com/video/374109483?background=1&playsinline=1&autoplay=1&loop=1&autopause=0&muted=1"
            style={{
              maxHeight: `47.4875rem`,
            }}
            title="odevideo"
            width="1920"
            loading="lazy"
          >background-image: url("https://i.vimeocdn.com/video/832712668.jpg?mw=2700&mh=1520&q=70");
          </iframe>

          <div className={`
            ${styles.content}
          `}>
            <div
              className={`
                filter:drop-shadow
              `}
            >
              <h2
                className={`
                  ${smallText}
                  margin-vertical:0
                  padding-bottom:site-pad-100
                `}
              >
                589 Toorak Road, Toorak
              </h2>
              <h1
                className={`
                  ${largeText}
                  margin-vertical:0
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
