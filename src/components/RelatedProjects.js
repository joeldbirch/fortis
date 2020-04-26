import React from 'react'
import {projectsURI} from '../../globals'
import CarouselSection from 'components/CarouselSection'

const RelatedProjects = ({previews = []}) => {
  const slides = previews
    .filter((similar) => similar.project)
    .map((similar) => similar.project)
  if (slides.length < 1) return ``

  const slideData = slides.map((post) => ({
    key: post.id,
    link: `${projectsURI}/${post.uri}/`,
    title: `${post.title} – ${post.projectDetails.detailsTable.textualDetails.suburb}`,
    subtitle: post.projectDetails.detailsTable.textualDetails.buildingType,
    image: post.featuredImage,
    id: post.id,
  }))

  return <CarouselSection title="Similar projects" slideData={slideData} />
}

export default RelatedProjects
