import React from 'react'
import Hero from '../../page/Hero'

const ProjectHero = ({children, ...props}) => {
  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
      `}
    >
      <Hero {...props}>{children}</Hero>
    </div>
  )
}

export default ProjectHero
