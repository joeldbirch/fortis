export const containerBase = `
  margin-horizontal:auto
  @mq-lap--padding-horizontal:600
  padding-horizontal:400
`

export const container = `
  ${containerBase}
  @mq-desk--max-width:container
`

export const sitePadV = `
  @mq-bigdesk--padding-vertical:800
  @mq-lap--padding-vertical:700
  @mq-palm--padding-vertical:600
  padding-vertical:500
`

export const padTop1 = `
  @mq-bigdesk--padding-top:vert1
  padding-top:350vw
`

export const padTop2 = `
  padding-top:700vw
  @mq-bigdesk--padding-top:vert2
`

export const padTop3 = `
  padding-top:1050vw
  @mq-bigdesk--padding-top:vert3
`

export const padBottom1 = `
  padding-bottom:350vw
  @mq-bigdesk--padding-bottom:vert1
`

export const padBottom2 = `
  padding-bottom:700vw
  @mq-bigdesk--padding-bottom:vert2
`

export const padBottom3 = `
  padding-bottom:1050vw
  @mq-bigdesk--padding-bottom:vert3
`

export const subhead = `
  @mq-desk--font-size:400
  font-size:300
  font-weight:700
  letter-spacing:20
  text-case:upper
`

export const button = `
  ${subhead}
  border-color:orange-400
  border-style:solid
  border-width:200
  color:orange-400
  &:hocus--bg-color:neutral-0
  &:hocus--text-decoration:underline
  padding-horizontal:700
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
  @mq-lap--font-size:600
  @mq-desk--font-size:700
  @mq-wall--font-size:800
  line-height:300
`

export const guide = `
  bg-image-guide
  bg-position:x-site-pad-100
  bg-size-guide-100
  @mq-lap--bg-position:x-site-pad-200
  @mq-lap--bg-size-guide-200
`
