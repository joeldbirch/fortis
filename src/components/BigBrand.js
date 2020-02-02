import React from 'react'

const styles = {
  brandingWrap: `
    display:flex
    @mq-palm--flex-direction:row-reverse
    @mq-palm--justify-content:flex-end
    @mq-palm--align-items:flex-end
    position:relative
  `,
  tagline: `
    @mq-bigdesk--font-size:550
    @mq-widepalm--font-size:500
    font-family:cursive
    font-size:400
    font-weight:400
    line-height:200
    text-align:center
    padding-bottom:200
    padding-top:400
    @mq-palm--padding-bottom:columns-0-1/2
    @mq-palm--text-align:left
    @mq-palm--padding-left:400
    @mq-desk--padding-left:800
    width:small-column
  `,
  watermark: `
    @mq-palm--width:columns-9
    @mq-desk--width:columns-7
    height:auto
    max-width:100
    @mq-palm--flex-shrink:1
  `,
}


const BigBrand = ({htmlText=null, className=``, headingTag=`h2`, children}) => {
  const HeadingTag = headingTag ? headingTag : `h2`
  return (
    <div
      className={`
        ${styles.brandingWrap}
        ${className}
      `}
    >
      <HeadingTag
        className={`
          ${styles.tagline}
          position:relative
        `}
        style={{
          transform: 'rotate(-2deg)',
        }}
      >
        {htmlText ? <span dangerouslySetInnerHTML={{__html: htmlText}}/> : ``}
        {children}
      </HeadingTag>

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
  )
}

export default BigBrand
