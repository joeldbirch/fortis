import React from 'react'
import {
  padBottom3,
} from '../styles/helpers'
import Image from './Image'

const styles = {
  root: `
    @mq-palm--degrade-to-inline
    ${padBottom3}
  `,

  textWrap: `
    @mq-palm--flex-direction:column
    @mq-palm--display:flex
    @mq-palm--padding-left:site-pad-200
    @mq-lap--padding-right:site-pad-200
    @mq-palm--width:50
    @mq-desk--width:40

    @mq-palm--margin-top:auto
    @mq-max-palm--margin-top:400
  `,

  imageWrap: `
    @mq-palm--width:50
    @mq-max-palm--height:18rem

  `,

  image: `
    height:100
    @mq-palm--margin-left:-site-pad-100
    @mq-bigdesk--margin-left:0
  `,
}

export default ({imageName, textClassName="", children }) => {
  return (
    <div className={styles.root}>

      <div className={styles.imageWrap}>
        <Image name={imageName} className={`${styles.image}`} />
      </div>

      <div className={`
        ${styles.textWrap}
        ${textClassName}
      `}>
        { children }
      </div>

    </div>
  )
}
