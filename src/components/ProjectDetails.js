import React from 'react'
import ProjectLogo from './ProjectLogo'

const ProjectDetails = ({...props}) => {

  return (
    <section
      className={`
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        padding-bottom:columns-0-1/2
        max-width:container
        margin-horizontal:auto
        position:relative
        grid-guide
      `}
      style={{
        '--guides-max-width': '87.5rem',
        '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
        '--position': 'absolute'
      }}
    >

      <ProjectLogo logo={ props.logo } alt={props.title} />
      <div dangerouslySetInnerHTML={{__html: props.content}} />
    </section>
  )
}

export default ProjectDetails
