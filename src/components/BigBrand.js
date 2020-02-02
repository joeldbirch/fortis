import React from 'react'

const styles = {
  brandingWrap: `
    @mq-palm--display:flex
    @mq-palm--flex-flow:row-reverse
    @mq-palm--justify-content:flex-end
    @mq-palm--align-items:flex-end
    position:relative
    flex-basis:20
    flex-grow:1
  `,
  tagline: `
    @mq-bigdesk--font-size:550
    @mq-palm--font-size:500
    font-family:cursive
    font-size:400
    font-weight:400
    line-height:200
    text-align:center
    padding-bottom:200
    padding-top:400
    @mq-palm--padding-bottom:columns-0-1/2
    @mq-palm--text-align:left
    @mq-palm--padding-left:800
    width:small-column
  `,
  watermark: `
    @mq-lap--width:columns-9
    @mq-desk--width:columns-7
    height:auto
    width:columns-12
  `,
}


const BigBrand = ({htmlText=null, className=``, children}) => {
  return (
    <div
      className={`
        ${styles.brandingWrap}
        ${className}
      `}
    >
      <h2
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
      </h2>

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
