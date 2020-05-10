import React, {useState, useLayoutEffect, useEffect} from 'react'
import PropTypes from 'prop-types'
import useHeaderIntersection from 'hooks/use-header-intersection'
import useFirstIntersection from 'hooks/use-first-intersection'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import {isIos} from 'utilities/helpers'
import {uiFontSize, getInvertedStyles} from 'styles/helpers'
import useFreeScroll from 'hooks/use-free-scroll'
import fixOutline from 'fix-outline'
import TheWrap from './TheWrap'
import Menu from './Menu'
import Main from './TheMain'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

import 'styles/index.scss'
// import '../../static/styles-dev.css'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  AddToHeader,
  overflowY = `overflow-y:scroll`,
  scrollStrict = false,
  uri = ``,
  slug = ``,
  ...props
}) => {
  const [menuOpen, toggleMenu] = useState(false)
  const [headerState] = useHeaderIntersection()
  const [firstPanel, initFirstSection] = useFirstIntersection()
  const [freeScroll, initFreeScroll] = useFreeScroll()

  useEffect(initFirstSection, [slug])

  useLayoutEffect(initFreeScroll, [])

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) {
      fixOutline()
      if (isIos())
        document.documentElement.style.setProperty(
          `--vh`,
          `${window.innerHeight * 0.01}px`
        )
    }
  }, [])

  return (
    <TheWrap
      id="TheWrap"
      className={`
        👉 the-wrap
        ${className}
        ${overflowY}
        height:100vh-fixed
        letter-spacing:-10
        scroll-behavior:smooth
      `}
      style={
        freeScroll
          ? {
              scrollSnapType: `none`,
            }
          : {}
      }
      {...props}
    >
      <Helmet>
        <link rel="preconnect" href="https://polyfill.io" />
        <style>
          {`
          ${`/*
            scrolling is done on #TheWrap element. This avoids Safari bug causing extra space on news.js template
          */`}
          html {
            overflow:hidden;
          }

          html,
          body,
          [id="___gatsby"],
          [id="gatsby-focus-wrapper"] {
            height: 100%;
          }
        `}
        </style>

        <style>
          {`
          ${`/*fix gatsby bug*/`}
          .gatsby-image-wrapper img {
            transition: opacity 1s !important;
          }
        `}
        </style>

        <html
          className={`
          @mq-lap--font-size:400
        `}
          lang="en"
        />
      </Helmet>

      <TheHeader id="SiteHeader" headerState={headerState}>
        <Link
          aria-labelledby="siteLogo"
          to="/"
          className={`
            ${uiFontSize}
            &::before--hit-area-xy-100
            color:inherit
            opacity:0
            pointer-events:auto
            position:relative
            ${
              !firstPanel.isIntersecting || ![`home`, `/`].includes(slug)
                ? `
                  opacity:100
                  transition-delay:500
                  transition-duration:700
                  transition-property:opacity
                `
                : ``
            }
          `}
          style={{
            marginTop: `-0.45em`,
          }}
        >
          <span id="siteLogo" className="visually-hidden">
            Fortis
          </span>
          <svg
            className={`
              display:block
              height:auto
            `}
            height="29"
            role="img"
            style={{
              '--logo-color': headerState.reversed
                ? `white`
                : firstPanel.isIntersecting
                ? `currentColor`
                : `hsla(0, 0%, 85%, 0.85)`,
              width: `5.5em`,
            }}
            width="110"
          >
            <use xlinkHref="/images/logo-fortis-watermark.svg#fortis-logo" />
          </svg>
        </Link>
        {AddToHeader && (
          <div
            className={`
                @mq-lap--padding-vertical:800
                @mq-max-palm--text-align:center
                @mq-palm--padding-left:columns-3-1/2
                @mq-palm--padding-right:columns-1-1/2
                padding-vertical:600
                pos-left:0
                pos-top:0
                position:absolute
                width:100
              `}
            style={getInvertedStyles(headerState.reversed)}
          >
            {AddToHeader}
          </div>
        )}
        <Menu
          headerReversed={headerState.reversed}
          toggleHandler={toggleMenu}
          isOpen={menuOpen}
          className="pointer-events:auto"
        />
      </TheHeader>

      <Main
        style={{
          '--guides-max-width': `87.5rem`,
          '--guide-color': `hsla(350, 100%, 48%, 0.1)`,
          '--position': `absolute`,
        }}
      >
        {children}
      </Main>

      <TheFooter
        className={`
      `}
      />
    </TheWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
}

export default Layout
