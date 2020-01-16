import React from 'react'
import Hero from '../../page/Hero'

const ProjectHero = ({children, ...props}) => {
  return (
    <div
      className={`
        margin-vertical:columns-1
      `}
    >
      <Hero {...props}>{children}</Hero>
    </div>
  )
}

export default ProjectHero
