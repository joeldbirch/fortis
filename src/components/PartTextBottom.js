import React from 'react'
import {
  padBottom3,
} from '../styles/helpers'
import Image from './image'

const styles = {
  root: `
    @mq-palm--degrade-to-inline
    ${padBottom3}
  `,

  textWrap: `
    @mq-palm--flex-direction:column
    @mq-palm--display:flex
    @mq-palm--padding-left:site-pad-100
    @mq-bigdesk--padding-left:vert1
    @mq-palm--width:40
    @mq-palm--margin-top:auto
    @mq-max-palm--margin-top:400
  `,

  imageWrap: `
    @mq-palm--width:55
    @mq-max-palm--height:18rem
  `,

  image: `
    height:100
  `,
}

export default ({imageName, children }) => {
  return (
    <div className={styles.root}>

      <div className={styles.imageWrap}>
        <Image name={imageName} className={`height:100`} />
      </div>

      <div className={styles.textWrap}>
        { children }
      </div>

    </div>
  )
}
