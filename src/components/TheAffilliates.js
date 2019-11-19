import React from 'react'
import { container } from '../styles/helpers'

const styles = {
  logosWrap: `
    👉 footerLogos
    degrade-to-inline
    albatross
    padding-vertical:site-pad
    justify-content:center
    @mq-widepalm--justify-content:flex-start
  `,
  item: `
    group
    flex-basis:40
    @mq-palm--flex-basis:25
    @mq-desk--flex-basis:15
    flex-shrink:0
    flex-grow:1
    max-width:17rem
  `,
  logoLink: `
    display:block
    position:relative
    transition-duration:400
    @mq-desk--translate-y:2rem
    group:hocus__translate-y:0
  `,
  logo: `
    display:block
    height:auto
    width:80
    @mq-desk--width:100
    @mq-max-desk-width--margin:auto
    max-width:33vw
    @mq-max-desk-width--margin-horizontal:400
  `,
  para: `
    @mq-desk--opacity:0
    @mq-desk--translate-y:-4rem
    font-size:200
    group:hocus__opacity:100
    group:hocus__translate-y:0
    position:relative
    transition-duration:400
  `
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
      margin-bottom:site-pad
      @mq-desk--margin-bottom:0
    `}
    >

    <div className={styles.logosWrap}
      style={{
        '--prefer-display': `flex`,
      }}
    >
      <div
        tabIndex="0"
        className={`
          ${styles.item}
        `}
      >
        <LogoLink
          aria-label="Fortis Development Group"
          className={`
            ${styles.logoLink}
            @mq-desk--pos-left:-10
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
        <p
          className={`
            ${styles.para}
          `}
        >Investing in a Fortis development is more than just attaining a beautiful physical address. It’s about making a connection between people and place. Fortis take a high touch approach to every stage of the development, and it is evidenced in every considered detail of every project.</p>
      </div>

      <div
        tabIndex="0"
        className={`
          ${styles.item}
        `}
      >
        <LogoLink
          aria-label="Toorak Time Capsule"
          className={`
            display:block
            position:relative
            transition-duration:400
            @mq-desk--translate-y:2rem
            group:hocus__translate-y:0

          `}
          to="https://tooraktimecapsule.com.au/"
          style={{
            left: `-3px`,
          }}
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
        <p
          className={`
            ${styles.para}
          `}
        >Ode is home to the Toorak Time Capsule, filled with memorabilia and stories of local residents. The capsule is set to be buried beneath the front footpath of Ode mid 2020.</p>
      </div>

      <div
        tabIndex="0"
        className={`
          ${styles.item}
        `}
      >
        <LogoLink
          aria-label="Ewert Leaf"
          className={`
            ${styles.logoLink}
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
              position: `relative`,
              left: `-4px`,
            }}
          />
        </LogoLink>
        <p
          className={`
            ${styles.para}
          `}
        >Ewert Leaf is a dynamic, multi-disciplinary design firm with experience in all aspects of architecture, interiors, urban design and landscape architecture. Balancing creativity and practicality, the team creates innovative yet pragmatic design solutions that are both contemporary and enduring.</p>
      </div>

      <div
        tabIndex="0"
        className={`
          ${styles.item}
        `}
      >
        <LogoLink
          aria-label="Cobild"
          className={`
            ${styles.logoLink}
            @mq-desk--pos-left:-10
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
        <p
          className={`
            ${styles.para}
          `}
        >Big-picture construction specialists with an eye for detail, Cobild’s craftsmanship and creative problem-solving practices are second-to-none. Their vision and expertise has made them the builder of choice for Fortis with three of our Melbourne developments.</p>
      </div>

      <div
        tabIndex="0"
        className={`
          ${styles.item}
        `}
      >
        <LogoLink
          aria-label="RT Edgar"
          className={`
            ${styles.logoLink}
            @mq-desk--pos-left:-10
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
        <p
          className={`
            ${styles.para}
          `}
        >For enquires please call<br />Sarah&#160;Case — 0439&#160;431&#160;020 Rudy&#160;Van&#160;Der&#160;Berg — 0405&#160;204&#160;450</p>
      </div>

    </div>
  </div>
)
