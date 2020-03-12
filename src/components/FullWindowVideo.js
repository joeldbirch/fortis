import React from 'react'

const FullWindowVideo = ({vimeoId, className=``, windowHeight=false, minHeight=null, height=null}) => {
  return (
    <div
      className={`
        ${className}
        height:100
        overflow:hidden
        pointer-events:none
        pos-left:50
        pos-top:50
        position:absolute
        transform:-50
        width:100
        z-index:-1
      `}
    >
      <iframe
        allow="autoplay; fullscreen"
        allowFullScreen
        className={`
          pos-left:50
          pos-top:50
          transform:-50
          position:absolute
          z-index:200
          width:100
          ${
            windowHeight
            ? `min-height:100vh-fixed`
            : `height:100`
          }
        `}
        style={{
          height, /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
          minWidth: `177.77vh`, /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
          minHeight,
        }}
        frameBorder="0"
        height="1080"
        src={`https://player.vimeo.com/video/${vimeoId}?background=1&playsinline=1&autoplay=1&loop=1&autopause=0&muted=1`}
        title="heroVideo"
        width="1920"
        loading="lazy"
      />
    </div>
  )
}

export default FullWindowVideo
