import React from 'react'
import FluidImage from '../../components/FluidImage'

const featureWidth = `
  @mq-max-bigdesk--max-width:measure
  @mq-bigdesk--width:columns-7
`

const styles = {
  root: `
    min-height:100vh
    padding-horizontal:site-pad-100
    padding-top:site-pad-300
    padding-bottom:400
    display:flex
    flex-direction:column
    justify-content:space-between
  `,
  inner: `
    margin-horizontal:auto
    width:columns-10
    ${featureWidth}
  `,
  mediaWrap: `
    padding-top:9/16
    margin-top:400
    min-height:hero-100
    @mq-desk--min-height:auto
    overflow:hidden
    position:relative
  `,
  brandingWrap: `
    @mq-desk--display:flex
    @mq-desk--flex-flow:row-reverse
    @mq-desk--justify-content:space-between
    @mq-desk--align-items:flex-end
    @mq-desk--margin-top:-400
    position:relative
  `,
  tagline: `
    font-family:cursive
    font-weight:400
    font-size:400
    @mq-palm--font-size:500
    @mq-bigdesk--font-size:600
    text-align:center
    padding-bottom:200
    padding-top:400
    @mq-desk--padding-bottom:site-pad
    @mq-desk--text-align:left
    @mq-desk--padding-left:site-pad
    @mq-desk--flex-grow:1
  `,
  watermark: `
    ${featureWidth}
    height:auto
    width:columns-12
    flex-shrink:0
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
        >
          <FluidImage
            image={image}
            className={`
              pos-left:0
              pos-top:0
              height:100
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



      </div>

      <div
        className={`
          ${styles.brandingWrap}
        `}
      >
        <h2
          className={`
            ${styles.tagline}
          `}
          style={{
            transform: 'rotate(-2deg)',
          }}
          dangerouslySetInnerHTML={{__html: text}}
        />

        <img
          className={`
            ${styles.watermark}
          `}
          src="images/logo-fortis-watermark.svg"
          role="presentation"
          alt="Fortis"
          width="764"
          height="202"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Branded
