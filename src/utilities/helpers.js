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
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      let svgStr = response

      if (svgStr.indexOf('height') === -1) {
        const height = image.height
        const width = image.width

        svgStr = svgStr.replace('<svg', `<svg height="${height}" width="${width}"`)
      }

      const span = document.createElement('span')
      span.innerHTML = svgStr

      const inlineSvg = span.getElementsByTagName('svg')[0]
      inlineSvg.setAttribute('class', image.className) // IE doesn't support classList on SVGs

      image.parentNode.replaceChild(inlineSvg, image)
    })
    .catch(() => {
      image.classList.add('not-inline')
    })
}

export const svgLoaded = (e) => (window !== 'undefined' && 'fetch' in window)
  ? fetchSvgInline(e.currentTarget)
  : true
