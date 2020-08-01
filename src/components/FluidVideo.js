import React from 'react'

const FluidVideo = ({id, title = `fluidVideo`, ratioPadding = `56.25%`}) => (
  <div
    className={`
      position:relative
      width:100
    `}
    style={{
      paddingBottom: ratioPadding,
    }}
  >
    <iframe
      className={`
        height:100
        position:absolute
        width:100
      `}
      frameBorder="0"
      height="540"
      src={`https://player.vimeo.com/video/${id}?playsinline=1`}
      title={title}
      width="960"
      loading="lazy"
    />
  </div>
)

export default FluidVideo
