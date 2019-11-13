import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { subhead } from '../styles/helpers'
import { randomBoolean } from '../utilities/helpers'
import ClipFollowsPointer from '../components/ClipFollowsPointer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TheHero from '../components/TheHero'

const styles = {
  heading: `
    @mq-bigdesk--font-size:max
    font-size:vw
    text-align:center
    text-case:lower
    white-space:no-wrap
    width:100
    position:absolute
    pos-top:50
    translate-y:-50
    cursor-default
  `,
  mainHeading: `
    👉 main-heading
    font-family:serif
    font-weight:400
  `,
  maskedHeading: `
    👉 masked-heading
    font-family:default
    font-weight:300
  `,
  ctaWrapper: `
    font-size:300
    @mq-desk--font-size:400
    margin-top:auto
    line-height:400
    padding-bottom:700
    padding-bottom:14vh
    @mq-lap--padding-top:0
    text-align:center
    position:relative
    z-index:200
  `,
  ctaLink: `
    theme__color:secondary
    theme__:hocus--color:highlight
    &:hocus--text-decoration:underline
    position:relative
    &:before--hit-area-xy-200
    ${subhead}
  `,
  layer: `
    position:absolute
    width:100
    height:100
    pos-tl:0
  `,
  mainLayer: `
    👉 main-layer
    z-index:0
    theme__bg-color:primary
  `,
  maskedLayer: `
    👉 masked-layer
    z-index:100
    bg-color:neutral-0
  `,
}

const CallToAction = () => (
  <p className={styles.ctaWrapper} id="CtaText">
    <span className="display:block">18 Chambers St, South Yarra</span>
    <Link to="/register/" className={styles.ctaLink}>
      Learn more
    </Link>
  </p>
)

const IndexPage = () => {
  function getTheme() {
    return randomBoolean() ? `theme:beige` : `theme:green`
  }

  function setTheme() {
    const theme = getTheme()
    const defaultTheme = `theme:beige`
    if (theme !== defaultTheme) {
      const themeRoot = document.getElementById('ThemeRoot')
      themeRoot.classList.remove(defaultTheme)
      themeRoot.classList.add(theme)
    }
  }

  function hideCircle() {
    const circle = document.getElementById(`TheCircle`)
    const newClassName = circle.className + ` is-hidden`
    // IE11 doesn't support .classList on SVG elements
    circle.setAttribute('className', newClassName)
  }

  useEffect(setTheme, [])
  useEffect(hideCircle, [])

  return (
    <Layout
      className={`is-home theme:beige`}
      id="ThemeRoot"
      onClick={() => navigate(`/register/`)}
    >
      <SEO title="Home" keywords={[`Bower`, `property`, `South Yarra`]} />

      <div className={`${styles.layer} ${styles.mainLayer}`}>

      </div>

      <div
        className={`
          ${styles.layer}
          filter:inset-shadow
          is-safari__filter:none
        `}
        id="MaskedLayerWrap"
      >
        <ClipFollowsPointer
          className={`${styles.layer} ${styles.maskedLayer}`}
        >
          <TheHero className="height:100 js-fade-image" />
        </ClipFollowsPointer>
      </div>

      <CallToAction />
    </Layout>
  )
}

export default IndexPage
