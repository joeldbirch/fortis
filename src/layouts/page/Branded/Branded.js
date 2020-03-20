import React from 'react'
import GatsbyImage from 'gatsby-image'
import Helmet from 'react-helmet'
import FullWindowVideo from 'components/FullWindowVideo'

const styles = {
  root: `
    js-contrast
    js-contrast--reverse
    min-height:100vh-fixed
    position:relative
    scroll-snap-align:start
    scroll-snap-stop:always
    width:100
  `,
  watermark: `
    @mq-desk--width:columns-7
    @mq-palm--flex-shrink:1
    @mq-palm--width:columns-9
    height:auto
    max-width:100
  `,
}

const Branded = ({image, text, video=null, nextSection=null, id=null, ...props}) => {

  return (
    <section
      className={` ${styles.root} `}
      id={id}
    >
      <Helmet>
      <style>{`
        @media (max-aspect-ratio: 16/9) {
          .full-screen-iframe iframe {
            width: calc(var(--vh, 1vh) * 100 * 1.778);
          }
        }
        @media (min-aspect-ratio: 16/9) {
          .full-screen-iframe iframe {
            height: calc(100vw * 0.5625);
          }
        }
      `}</style>
      </Helmet>
      <GatsbyImage
        fluid={image.imageFile.childImageSharp.fluid}
        className={`
          height:100vh-fixed
          z-index:-1
          position:absolute
          pos-top-left:0
        `}
      />
      {
        video && (
          <FullWindowVideo
            vimeoId={video}
            windowHeight={true}
            className={`
              full-screen-iframe
              min-height:100vh-fixed
            `}
          />
        )
      }
      <div
        className={`
          position:absolute
          pos-left-right:0
          pos-bottom:0
          max-width:container
          margin-horizontal:auto
          padding-horizontal:columns-0-1/2
          padding-bottom:800
        `}
      >
        <img
          className={`
            ${styles.watermark}
          `}
          src="/images/logo-fortis-watermark.svg"
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
