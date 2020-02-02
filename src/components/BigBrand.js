import React from 'react'

const styles = {
  brandingWrap: `
    @mq-desk--display:flex
    @mq-desk--flex-flow:row-reverse
    @mq-desk--justify-content:space-between
    @mq-desk--align-items:flex-end
    @mq-desk--margin-top:-400
    position:relative
    flex-basis:20
    flex-grow:1
  `,
  tagline: `
    handwritten
    text-align:center
    padding-bottom:200
    padding-top:400
    @mq-desk--padding-bottom:columns-0-1/2
    @mq-desk--text-align:left
    @mq-desk--padding-left:columns-0-1/2
    @mq-desk--flex-grow:1
  `,
  watermark: `
    @mq-desk--width:columns-7
    height:auto
    width:columns-12
  `,
}


const BigBrand = ({children}) => {
  return (
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
        dangerouslySetInnerHTML={{__html: children}}
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
  )
}

export default BigBrand
