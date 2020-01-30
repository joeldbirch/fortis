import React from 'react'
import Divider from 'components/DividerHorizontal'
import { uiFontSize } from 'styles/helpers'

const RelatedContent = ({
  similarProjects,
  className=``,
}) => {
  console.log(similarProjects)
  const slides = similarProjects.map(similar => similar.project )
  return (
    <div className={`
      ${className}
      position:relative
      padding-horizontal:columns-0-1/2
    `}>
      <Divider
        noMargin={true}
        className={`
          padding-horizontal:columns-0-1/2
        `}
      />
      <section
        className="
          @mq-desk--padding-horizontal:columns-1
        "
      >
        <h2
          className={`
            ${uiFontSize}
            margin-top:600
          `}
        >
          Similar Projects here
        </h2>

        <div
          className={`
            padding-vertical:columns-1
          `}
        >
          {
            slides.map(slide => (
              slide.title
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default RelatedContent
