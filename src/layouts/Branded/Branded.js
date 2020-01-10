import React from 'react'
import FluidImage from '../../components/FluidImage'

const styles = {
  root: `
    height:100vh
    margin-horizontal:-site-pad-300
    display:grid
  `,
  inner: `
    padding-horizontal:site-pad-400
    padding-vertical:site-pad-300
  `,
  mediaWrap: `
    padding-top:9/16
    padding-horizontal:site-pad-100
    max-height:container
    max-width:67rem
    margin-horizontal:auto
    margin-vertical:400
    overflow:hidden
    position:relative
  `,
}

const Branded = ({image, text, video=null}) => {
  return (
    <section className={`
      ${styles.root}
    `}>
      <div className={`
        ${styles.inner}
      `}>
        <div
          className={`
            ${styles.mediaWrap}
          `}
          style={{
            maxHeight: `47.4875rem`,
          }}
        >
          <FluidImage
            image={image}
            className={`
              pos-left:0
              pos-top:0
              width:100
            `}
            style={{
              position: `absolute`,
            }}
          />

          {
            video
              ? <iframe
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className={`
                    filter:darken
                    height:100
                    pos-left:50
                    pos-top:50
                    transform:-50
                    position:absolute
                  `}
                  frameBorder="0"
                  height="1080"
                  src={`https://player.vimeo.com/video/${video}?background=1&playsinline=1&autoplay=0&loop=1&autopause=0&muted=1`}
                  style={{
                    maxHeight: `47.4875rem`,
                  }}
                  title="brandedVideo"
                  width="1920"
                  loading="lazy"
                />
              : ''
          }

        </div>

        <h2 className={`
          font-family:cursive
          font-weight:400
        `}>{text}</h2>
      </div>
    </section>
  )
}

export default Branded
