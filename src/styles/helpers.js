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
  margin-bottom:400
  rhythm-fix-after
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
  font-family:cursive
  font-weight:400
  font-size:400
  @mq-palm--font-size:500
  @mq-bigdesk--font-size:600
`

export const centred = `
  position:absolute
  pos-top-left:50
  transform:-50
`

export const appleBezier = `cubic-bezier(0.645, 0.045, 0.355, 1)`
export const appleFade = {transition: `0.4s ${appleBezier}`}

export const uiFontSize = `
  @mq-lap--font-size:500
  @mq-tiny--font-size:400
  font-size:300
  font-weight:400
`
