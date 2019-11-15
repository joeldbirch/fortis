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
    align-items:flex-start
  `,

  imageWrap: `
    @mq-palm--width:50
    @mq-max-palm--height:18rem

  `,

  image: `
    height:100
  `,
}

export default ({imageName, imageClassName="", imageWrapClassName="", textClassName="", className="", children }) => {
  return (
    <div className={`
      ${styles.root}
      ${className}
    `}>

      <div className={`
        ${styles.imageWrap}
        ${imageWrapClassName}
      `}>
        <Image name={imageName} className={`
        ${styles.image}
        ${imageClassName}
      `} />
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
