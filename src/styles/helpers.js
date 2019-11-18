export const containerBase = `
  margin-horizontal:auto
`

export const container = `
  ${containerBase}
  @mq-desk--max-width:container
`

export const sitePadV = `
  padding-vertical:site-pad-100
`

export const padTop1 = `
  padding-top:site-pad-100
`

export const padTop2 = `
  padding-top:site-pad-200
`

export const padTop3 = `
  padding-top:1050vw
  @mq-bigdesk--padding-top:vert3
`

export const padBottom1 = `
  padding-bottom:site-pad-100
`

export const padBottom2 = `
  padding-bottom:site-pad-200
`

export const padBottom3 = `
  padding-bottom:1050vw
  @mq-bigdesk--padding-bottom:vert3
`

export const subhead = `
  @mq-desk--font-size:400
  font-size:300
  letter-spacing:20
  text-case:upper
`

export const button = `
  &:hocus--background-color:neutral-900
  background-color:black-80
  color:neutral-0
  font-size:400
  padding-horizontal:600
  padding-vertical:400
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
  @mq-lap--font-size:600
  @mq-desk--font-size:700
  @mq-wall--font-size:800
  line-height:300
  font-weight:400
`

export const smallText = `
  @mq-lap--font-size:300
  font-size:200
  font-weight:400
`

export const guide = `
  @mq-lap--bg-position:x-site-pad-200
  @mq-lap--bg-size-guide-200
  bg-image-guide
  bg-position:x-site-pad-100
  bg-size-guide-100
`

export const forceFullWidth = `
  margin-horizontal:-50vw
  pos-left-right:50
  position:relative
  width:100vw
`
