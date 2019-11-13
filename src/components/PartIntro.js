import React from 'react'
import {
  padTop2,
  padBottom3,
  bodyText,
} from '../styles/helpers'

const styles = {
  root: `
    @mq-palm--degrade-to-inline
    ${padTop2}
    ${padBottom3}
  `,

  textWrap: `
    flex-direction:column
    @mq-palm--display:flex
    @mq-palm--margin-right:100p
    @mq-palm--width:50
  `,

  imageWrap: `
    flex-grow:1
    @mq-max-palm--height:18rem
    @mq-max-palm--margin-bottom:100
    @mq-max-palm--margin-top:600
    @mq-palm--width:40
    position:relative
  `,

  image: `
    height:100
  `,

  bodyText: `
    margin-top:auto
    padding-top:400
    width:18em
    ${bodyText}
  `,


  caption: `
    font-size:100
    @mq-lap--font-size:200
    margin-top:300
    @mq-lap--margin-top:400
    pos-top:100
    position:absolute
  `,
}

export default ({
  bodyText=``,
  image=()=>{},
  imageCaption=null,
  children
}) => {
  return (
    <div className={styles.root} style={{'--prefer-display': `flex`}}>

      <div className={styles.textWrap}>
        {children}

        {
          bodyText
          ? <p className={styles.bodyText}>{bodyText()}</p>
          : ''
        }
      </div>

      <figure className={styles.imageWrap} style={{'--prefer-display': `inline-block`}}>

        { image(styles.image) }

        {
          imageCaption
          ? <figcaption className={styles.caption}>
            {(imageCaption())}
          </figcaption>
          : ``
        }
      </figure>
    </div>
  )
}
