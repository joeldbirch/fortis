import React from 'react'

const ProjectsCarousel = ({sectionHeading}) => {
  return (
    <section>
      <h2 dangerouslySetInnerHTML={{__html: sectionHeading}} />
    </section>
  )
}

export default ProjectsCarousel
