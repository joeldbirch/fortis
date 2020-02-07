export const containerBase = `
  margin-horizontal:auto
`

export const container = `
  ${containerBase}
  @mq-desk--max-width:container
`

export const sitePadV = `
  padding-vertical:columns-0-1/2
`

export const padTop1 = `
  padding-top:columns-0-1/2
`

export const padTop2 = `
  padding-top:columns-1
`

export const padTop3 = `
  padding-top:1050vw
  @mq-bigdesk--padding-top:vert3
`

export const padBottom1 = `
  padding-bottom:columns-0-1/2
`

export const padBottom2 = `
  padding-bottom:columns-1
`

export const padBottom3 = `
  padding-bottom:1050vw
  @mq-bigdesk--padding-bottom:vert3
`

export const subhead = `
  @mq-bigdesk--font-size:600
  @mq-lap--font-size:500
  font-size:500
  font-weight:400
`

export const button = `
  &:hocus--opacity:100
  background-color:neutral-900
  opacity:80
  color:neutral-0
  font-size:400
  padding-horizontal:600
  padding-vertical:400
  text-transform:uppercase
`

export const tintWrap = `
  flex-grow:1
  flex-shrink:0
  pos-left:50
  position:relative
  translate-x:-50
  width:100vw
  `

export const callOutText = `
  @mq-bigdesk--font-size:990
  @mq-lap--font-size:grow600
  font-size:600
  font-weight:400
`

export const callOut = `
  ${callOutText}
  ${sitePadV}
  @mq-lap--width:70
  @mq-palm--width:80
  width:90
`

export const bodyText = `
  font-size:400
  @mq-lap--font-size:500
  line-height:300
  font-weight:400
`

export const largeText = `
  font-size:600
  @mq-lap--font-size:800
  line-height:300
  font-weight:400
`

export const smallText = `
  @mq-lap--font-size:300
  font-size:200
  font-weight:400
`

export const guide = `
  @mq-lap--bg-position:x-columns-1
  @mq-lap--bg-size-guide-200
  bg-image-guide
  bg-position:x-columns-0-1/2
  bg-size-guide-100
`

export const forceFullWidth = `
  margin-horizontal:-50vw
  pos-left-right:50
  position:relative
  width:100vw
`

export const handwritten = `
  @mq-bigdesk--font-size:550
  @mq-palm--font-size:500
  font-family:cursive
  font-size:400
  font-weight:400
  line-height:200
`

export const centred = `
  position:absolute
  pos-top-left:50
  transform:-50
`

export const appleBezier = `cubic-bezier(0.645, 0.045, 0.355, 1)`
export const appleFade = {transition: `opacity 0.4s, transform 0.4s, filter 0.2s`}

export const uiFontSize = `
  @mq-lap--font-size:500
  @mq-tiny--font-size:400
  font-size:300
  font-weight:400
`

export const highlight = `
  box-shadow:highlight
  position:relative
  z-index:900
`

export const shader = `
  &:before--background-image:black-20-down
  &:before--pointer-events:none
  &:before--hit-area-xy-0
  &:before--z-index:300
`

export const invertedStyles = {
  filter: 'invert(1) contrast(1.2)',
  // textShadow: 'rgba(255,255,255, 0.1) 0px -1px 1px,  rgba(255,255,255, .5) 0px -1px 20px',
  ...appleFade,
}

export const nonInvertedStyles = {
  filter: 'invert(0) contrast(1)',
  ...appleFade,
}

export const getInvertedStyles = isInverted => (
  isInverted
  ? invertedStyles
  : nonInvertedStyles
)
