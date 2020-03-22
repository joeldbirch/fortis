import React from 'react'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <style>{`
          @media (max-aspect-ratio: 16/9) {
            .full-screen-iframe {
              width: calc(var(--vh, 1vh) * 100 * 1.778);
            }
          }
          @media (min-aspect-ratio: 16/9) {
            .full-screen-iframe {
              height: calc(100vw * 0.5625);
            }
          }
        `}</style>
      </Helmet>
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
            ? `min-height:100vh-fixed full-screen-iframe`
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
