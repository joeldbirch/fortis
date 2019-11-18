import React from 'react'
import { container } from '../styles/helpers'
import SvgImg from './SvgImg'

const styles = {

  inner: `
    👉 footerInnerWrap
    border-top-color:neutral-600
    border-top-style:solid
    border-top-width:100
    @mq-lap--display:flex
    @mq-lap--justify-content:space-between
    padding-vertical:400
  `,
  logosWrap: `
    👉 footerLogos
    align-items:center
    degrade-to-inline
    display:grid
    grid-gap:site-pad-100
    @mq-desk--grid-gap:vert1
    @mq-bigdesk--grid-gap:vert2
    grid-template-columns:var1
    @mq-lap--width:70
    @mq-desk--width:63
  `,
  logoLink: `
    👉 footerLogoLink
    display:block
    margin-right:site-pad-100
    @mq-lap--margin-right:400
  `,
  logo: `
    all-fill-current
    color:neutral-900
    display:block
    height:auto
    width:100
  `,
  credit: `
    align-self:start
    flex-shrink:0
    font-size:100
    @mq-desk--white-space:no-wrap
    @mq-lap--margin-left:0
    @mq-lap--text-align:left
    @mq-lap--width:25
    @mq-desk--width:20
    @mq-lap--padding-top:100
    @mq-lap--white-space:normal
    padding-top:500
    white-space:no-wrap
  `,
}

const LogoLink = ({ children, to = `#`, className = ``, ...props }) => {
  className += styles.logoLink
  return (
    <a href={to} rel="external" {...props} className={className}>
      {children}
    </a>
  )
}

export default () => (
  <div className={container}>
    <div className={styles.inner}>
      <div className={styles.logosWrap}
        style={{
          '--prefer-display': 'grid',
          '--grid-template-columns-var1': '35fr 20fr 15fr 30fr',
        }}
      >
        <LogoLink
          aria-label="Fortis Development Group"
          className={`flex-basis:35`}
          to="https://www.fortis.com.au/"
        >
          <SvgImg
            alt=""
            className={styles.logo}
            src="/images/logo-fortis.svg"
          />
        </LogoLink>
        <LogoLink
          aria-label="Ewert Leaf"
          className={`flex-basis:20`}
          to="https://ewertleaf.com.au/"
        >
          <SvgImg
            alt=""
            className={styles.logo}
            src="/images/logo-ewert-leaf.svg"
          />
        </LogoLink>
        <LogoLink
          aria-label="Bruce Henderson Architects"
          className={`flex-basis:15`}
          to="https://www.facebook.com/BHAarchitects/"
        >
          <SvgImg
            alt=""
            className={styles.logo}
            src="/images/logo-bha.svg"
          />
        </LogoLink>
        <LogoLink
          aria-label="Marshall White"
          className={`flex-basis:30`}
          to="https://www.marshallwhite.com.au/"
        >
          <SvgImg
            alt=""
            className={styles.logo}
            src="/images/logo-marshall-white.svg"
          />
        </LogoLink>
      </div>
      <p className={styles.credit} role="contentinfo">
        © {new Date().getFullYear()} Fortis Development Group
      </p>
    </div>
  </div>
)
