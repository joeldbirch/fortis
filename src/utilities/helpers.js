export const randomBoolean = () => Math.random() >= 0.5

export const hasPointerEvents = () =>
  typeof window !== `undefined` && `PointerEvent` in window

export const usesHover =
  typeof window !== `undefined` &&
  `matchMedia` in window &&
  window.matchMedia('(hover: hover)').matches

export const isSafari = () =>
  typeof window !== `undefined` &&
  /.*Version.*Safari.*/.test(navigator.userAgent)

export const isIos = () =>
  typeof window !== `undefined` &&
  /iphone|ipod|ipad/.test(navigator.userAgent.toLowerCase())

export const getSvgInline = (image) => (
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      let svg = response
      if (svg.indexOf('height') === -1) {
        const height = image.height
        const width = image.width
        svg = svg.replace('<svg', `<svg height="${height}" width="${width}"`)
      }
      return svg.replace('<svg', '<svg class="width:100 height:auto"')
    })
)

export const fetchSvgInline = (image) => {
  fetch(image.currentSrc || image.src)
    .then((response) => response.text())
    .then((response) => {
      const svgStr = response

      if (svgStr.indexOf('<svg') === -1) {
        return
      }

      const span = document.createElement('span')

      span.innerHTML = svgStr

      const inlineSvg = span.getElementsByTagName('svg')[0]

      inlineSvg.setAttribute('aria-label', image.alt || '')
      inlineSvg.setAttribute('class', image.className) // IE doesn't support classList on SVGs
      inlineSvg.setAttribute('focusable', false)
      inlineSvg.setAttribute('role', 'img')

      if (image.height) {
        inlineSvg.setAttribute('height', image.height)
      }

      if (image.width) {
        inlineSvg.setAttribute('width', image.width)
      }

      image.parentNode.replaceChild(inlineSvg, image)
    })
    .catch(() => {
      image.classList.add('not-inline')
    })
}

export const svgLoaded = (e) => (window !== 'undefined' && 'fetch' in window)
  ? fetchSvgInline(e.currentTarget)
  : true

// src/utils/index.js

/**
 * Parses a menu item object and returns Gatsby-field URI.
 *
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 * @param blogURI
 */
export const CreateLocalLink = (menuItem, wordPressUrl, blogURI=`news/`) => {
  const { url, connectedObject } = menuItem

  if (url === '#') return url
  /**
   * Always want to remove our API URL.
   */
  let newUri = url.replace(wordPressUrl, '')

  /**
   * If it's a blog link, respect the users blogURI setting.
   */
  if (connectedObject && connectedObject.__typename === `WPGraphQL_Post`) {
    newUri = blogURI + newUri
  }

  return newUri
}

export const convertAmpersands = text => text.replace(`&#038`,`&`).replace(`&amp`,`&`)

export const getPath = link => {
  const path = new URL(link)
  return path.href.replace(path.origin, ``)
}

export const getCurrentYear = () => new Date().getFullYear()

export const cols = (num) => Math.round((num / 13) * 10000) / 100

export const huEm = (px) => `${px / 16}em`

export const mq = {
  palm: huEm(550),
  maxPalm: huEm(549),
  desk: huEm(960),
}

export const postWithFeaturedImageSizes = (post, sizes) => {
  if (!sizes) return post
  const alteredPost= Object.assign(
    {},
    post
  )
  alteredPost.featuredImage.imageFile.childImageSharp.fluid.sizes = sizes
  return alteredPost
}
