import React from 'react'
import {blogURI} from '../../globals'
import CarouselSection from 'components/CarouselSection'

const RelatedPosts = ({previews = []}) => {
  const slides = previews
    .filter((related) => related.post)
    .map((related) => related.post)
  if (slides.length < 1) return ``

  const slideData = slides.map((post) => ({
    key: post.id,
    link: `${blogURI}/${post.slug}/`,
    title: post.title,
    subtitle: post.categories.nodes[0].name,
    image: post.featuredImage,
    id: post.id,
  }))

  return (
    <CarouselSection id="relatedPosts" title="Related posts" slideData={slideData} />
  )
}

export default RelatedPosts
