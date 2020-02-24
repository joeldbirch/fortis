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
    handwritten
    @mq-bigdesk--font-size:550
    @mq-desk--padding-left:800
    @mq-palm--padding-left:400
    @mq-palm--padding-bottom:400
    @mq-widepalm--padding-left:800
    @mq-widepalm--font-size:500
    font-family:cursive
    letter-spacing:0
    white-space:pre
    font-size:500
    font-weight:400
    line-height:200
    padding-bottom:100
    padding-top:400
    width:small-column
    @mq-max-palm--margin-horizontal:auto
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


const BigBrand = ({htmlText=null, className=``, textClasses=``, HeadingTag=`h2`, children}) => {
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
          @mq-desk--transform:var-2
          @mq-bigdesk--margin-top:400
          z-index:100
        `}
        style={{
          '--translate-y-var-2': '10%',
        }}
      >
        {children}
        {htmlText && <span className={textClasses} dangerouslySetInnerHTML={{__html: htmlText}}/> }
      </HeadingTag>

      {/* div wrapper needed because Safari won't treat the img as a flex item properly */}
      <div>
        <img
          className={`
            ${styles.watermark}
          `}
          src="/images/logo-fortis-watermark.svg"
          alt="Fortis"
          width="764"
          height="202"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default BigBrand
