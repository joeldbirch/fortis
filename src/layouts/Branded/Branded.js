import React from 'react'
import FluidImage from '../../components/FluidImage'
import FullWindowVideo from '../../components/FullWindowVideo'
import { handwritten } from '../../styles/helpers'

const styles = {
  root: `
    height:100vh
    min-height:50vw
    padding-horizontal:site-pad-100
    padding-top:site-pad-300
    padding-bottom:400
    display:flex
    flex-direction:column
    justify-content:space-between
  `,
  mediaWrap: `
    flex-basis:80
    margin-top:400
    margin-horizontal:site-pad-100
    @mq-desk--margin-horizontal:site-pad-300
    @mq-bigdesk--margin-horizontal:site-pad-500
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
    flex-basis:20
  `,
  tagline: `
    ${handwritten}
    text-align:center
    padding-bottom:200
    padding-top:400
    @mq-desk--padding-bottom:site-pad-100
    @mq-desk--text-align:left
    @mq-desk--padding-left:site-pad-100
    @mq-desk--flex-grow:1
  `,
  watermark: `
    @mq-desk--width:columns-7
    height:auto
    width:columns-12
  `,
}

const Branded = ({image, text, video=null}) => {
  return (
    <section
      className={`
        ${styles.root}
      `}
    >
      <div
        className={`
          ${styles.mediaWrap}
        `}
      >
        {
          video
            ? <FullWindowVideo vimeoId={video} minHeight="100%" height="56.25vmin" />
            : <FluidImage
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
        }
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
          src="/images/logo-fortis-watermark.svg"
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
