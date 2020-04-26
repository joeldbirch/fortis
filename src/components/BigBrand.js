import React from 'react'
import SvgImg from 'components/SvgImg'

const styles = {
  brandingWrap: `
    align-items:flex-end
    @mq-palm--flex-direction:row-reverse
    @mq-palm--justify-content:flex-end
    display:flex
    position:relative
  `,
  tagline: `
    @mq-bigdesk--font-size:550
    @mq-bigdesk--margin-top:400
    @mq-desk--padding-left:800
    @mq-desk--transform:var-2
    @mq-lap--padding-bottom:columns-0-1/2
    @mq-max-palm--margin-horizontal:auto
    @mq-max-palm--padding-top:400
    @mq-palm--padding-bottom:400
    @mq-palm--padding-left:400
    @mq-widepalm--font-size:500
    @mq-widepalm--padding-bottom:600
    @mq-widepalm--padding-left:800
    font-family:cursive
    font-size:500
    font-weight:400
    handwritten
    letter-spacing:0
    line-height:200
    padding-bottom:100
    position:relative
    transform:var-1
    white-space:pre
    width:small-column
    z-index:100
  `,
  watermark: `
    @mq-desk--width:columns-7
    @mq-palm--flex-shrink:1
    @mq-palm--width:columns-9
    height:auto
    max-width:100
    opacity:90
    svg-fill-color:neutral-100
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
        `}
        style={{
          '--translate-y-var-2': `10%`,
        }}
      >
        {children}
        {htmlText && <span className={textClasses} dangerouslySetInnerHTML={{__html: htmlText}}/> }
      </HeadingTag>

      {/* div wrapper needed because Safari won't treat the img as a flex item properly */}
      <div>
        <SvgImg
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
    </div>
  )
}

export default BigBrand
