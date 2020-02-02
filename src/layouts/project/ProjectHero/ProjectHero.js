import React from 'react'
import Hero from 'layouts/page/Hero'

const ProjectHero = ({children, ...props}) => {
  return (
    <div
      className={`
        @mq-palm--margin-vertical:columns-0-1/2
      `}
    >
      <Hero {...props}>{children}</Hero>
    </div>
  )
}

export default ProjectHero
