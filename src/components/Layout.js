import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import useHeaderIntersection from 'hooks/use-header-intersection'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import TheWrap from './TheWrap'
import Menu from './Menu'
import Main from './TheMain'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { isIos } from 'utilities/helpers'
import { uiFontSize, getInvertedStyles } from 'styles/helpers'
import useFreeScroll from 'hooks/use-free-scroll'
import fixOutline from 'fix-outline'

import 'styles/index.scss'
// import '../../static/styles-dev.css'

const Layout = ({
  children,
  headerClassName = ``,
  className = ``,
  AddToHeader,
  overflowY=`overflow-y:scroll`,
  scrollStrict=false,
  ...props
}) => {

  const [menuOpen, toggleMenu] = useState(false)
  const [headerState] = useHeaderIntersection()
  const [freeScroll, initFreeScroll] = useFreeScroll()
  useLayoutEffect(initFreeScroll, [])

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) {
      fixOutline()
      if (isIos()) document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
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
          scrollSnapType: `none`
        }
        : {}
      }
      {...props}
    >
      <Helmet>
        <link rel="preconnect" href="https://polyfill.io"/>
        <style>{`
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
        `}</style>

        <style>{`
          ${`/*fix gatsby bug*/`}
          .gatsby-image-wrapper img {
            transition: opacity 1s !important;
          }
        `}</style>
        <body className={`
        `}
        />
        <html className={`
          @mq-lap--font-size:400
        `} lang="en" />

        <meta name="robots" content="noindex" />

      </Helmet>

      <TheHeader
        id="SiteHeader"
        headerState={headerState}
      >
        <Link
          to="/"
          className={`
            color:inherit
            hover-underline
            &::before--hit-area-xy-100
            position:relative
            pointer-events:auto
            ${uiFontSize}
          `}
          style={getInvertedStyles(headerState.reversed)}
        >
          Fortis
        </Link>
        { AddToHeader && (
            <div
              className={`
                @mq-max-palm--text-align:center
                @mq-palm--padding-left:columns-3-1/2
                @mq-palm--padding-right:columns-1-1/2
                width:100
                position:absolute
                pos-left:0
              `}
              style={getInvertedStyles(headerState.reversed)}
            >
              {AddToHeader}
            </div>
          )
        }
        <Menu headerReversed={headerState.reversed} toggleHandler={toggleMenu} isOpen={menuOpen} className="pointer-events:auto" />
      </TheHeader>

      <Main
        style={{
          '--guides-max-width': '87.5rem',
          '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
          '--position': 'absolute'
        }}
      >
        {children}
      </Main>

      <TheFooter className={`
      `} />

    </TheWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
}

export default Layout
