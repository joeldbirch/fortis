import React from 'react'
import {
  padBottom3,
} from '../styles/helpers'

const styles = {
  root: `
    @mq-palm--degrade-to-inline
    ${padBottom3}
  `,

  textWrap: `
    flex-direction:column
    display:flex
    @mq-palm--margin-left:50p
    @mq-palm--width:40
    @mq-palm--margin-right:100p
    @mq-max-palm--margin-top:400
  `,

  imageWrap: `
    flex-grow:1
    position:relative
    @mq-palm--width:40
    @mq-max-palm--height:18rem
  `,

  image: `
    height:100
    `,
}

export default ({image=()=>{}, children }) => {
  return (
    <div className={ styles.root }>

      <div className={ styles.imageWrap }>
        { image(styles.image) }
      </div>

      <div className={ styles.textWrap }>
        { children }
      </div>

    </div>
  )
}
