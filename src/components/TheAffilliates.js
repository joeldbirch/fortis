import React from 'react'
import { container } from '../styles/helpers'

const styles = {
  logosWrap: `
    👉 footerLogos
    degrade-to-inline
    albatross
    padding-vertical:site-pad
  `,
  logo: `
    display:block
    height:auto
    width:100
  `,
}

const LogoLink = ({ children, to = `#`, className = ``, ...props }) => {
  return (
    <a href={to} rel="external" {...props} className={className}>
      {children}
    </a>
  )
}

export default () => (
  <div
    className={`
      ${container}
      width:100
    `}
    >

    <div className={styles.logosWrap}
      style={{
        '--prefer-display': `flex`,
        '--albatross-margin': `0`,
      }}
    >
      <div
        className={`
          group
          max-width:17rem
          padding-right:500
          @mq-desk--padding-right:800
        `}
      >
        <LogoLink
          aria-label="Fortis Development Group"
          className={`
            display:block
            position:relative
            pos-left:-10
          `}
          to="https://www.fortis.com.au/"
        >
          <img
            alt=""
            width="120"
            height="64"
            className={styles.logo}
            lazyload="lazy"
            src="/images/logo-fortis.svg"
            style={{
              marginLeft: `3px`,
            }}
          />
        </LogoLink>

      </div>

      <div
        className={`
          group
          max-width:17rem
          padding-right:500
          @mq-desk--padding-right:800
        `}
      >
        <LogoLink
          aria-label="Toorak Time Capsule"
          className={`
            display:block
            position:relative
          `}
          to="https://tooraktimecapsule.com.au/"
        >
          <img
            alt=""
            width="120"
            height="64"
            className={styles.logo}
            lazyload="lazy"
            src="/images/logo-toorak-time-capsule.svg"
          />
        </LogoLink>

      </div>

      <div
        className={`
          group
          max-width:17rem
          padding-right:500
          @mq-desk--padding-right:800
        `}
      >
        <LogoLink
          aria-label="Ewert Leaf"
          className={`
            display:block
            position:relative
            pos-left:-10
          `}
          to="https://ewertleaf.com.au/"
        >
          <img
            alt=""
            width="120"
            height="64"
            className={styles.logo}
            lazyload="lazy"
            src="/images/logo-ewert-leaf-2.svg"
            style={{
              marginLeft: `-4px`,
            }}
          />
        </LogoLink>

      </div>

      <div
        className={`
          group
          max-width:17rem
          padding-right:500
          @mq-desk--padding-right:800
        `}
      >
        <LogoLink
          aria-label="Cobild"
          className={`
            display:block
            position:relative
            pos-left:-10
          `}
          to="https://www.cobild.com.au"
        >
          <img
            alt=""
            width="120"
            height="64"
            className={styles.logo}
            lazyload="lazy"
            src="/images/logo-cobild.svg"
          />
        </LogoLink>

      </div>

      <div
        className={`
          group
          max-width:17rem
          padding-right:500
          @mq-desk--padding-right:800
        `}
      >
        <LogoLink
          aria-label="RT Edgar"
          className={`
            display:block
            position:relative
            pos-left:-10
          `}
          to="https://www.rtedgar.com"
        >
          <img
            alt=""
            width="120"
            height="64"
            className={styles.logo}
            lazyload="lazy"
            src="/images/logo-rt-edgar.svg"
          />
        </LogoLink>

      </div>

    </div>
  </div>
)
