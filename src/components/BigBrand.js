import React from 'react'

const styles = {
  brandingWrap: `
    @mq-palm--align-items:center
    @mq-palm--flex-direction:row-reverse
    @mq-palm--justify-content:flex-end
    display:flex
    position:relative
  `,
  tagline: `
    @mq-bigdesk--font-size:550
    @mq-desk--padding-left:800
    @mq-palm--padding-left:400
    @mq-widepalm--padding-left:800
    @mq-palm--text-align:left
    @mq-widepalm--font-size:500
    font-family:cursive
    white-space:pre
    font-size:500
    font-weight:400
    line-height:200
    padding-bottom:100
    padding-top:400
    text-align:center
    width:small-column
  `,
  watermark: `
    @mq-desk--width:columns-7
    @mq-palm--flex-shrink:1
    @mq-palm--width:columns-9
    height:auto
    max-width:100
    opacity:90
  `,
}


const BigBrand = ({htmlText=null, className=``, textClasses=``, headingTag=`h2`, children}) => {
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
          transform:var-1
          @mq-widepalm--transform:var-2
          @mq-bigdesk--margin-top:400
        `}
        style={{
          '--rotate-var-1': '-2deg',
          '--translate-y-var-2': '15%',
        }}
      >
        {children}
        {htmlText ? <span className={textClasses} dangerouslySetInnerHTML={{__html: htmlText}}/> : ``}
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
