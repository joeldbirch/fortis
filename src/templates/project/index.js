import React  from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Hero from '../../layouts/Hero'

const Project = ({ pageContext }) => {

  const {
    project: {title, content, featuredImage, projectDetails: {video}},
  } = pageContext
  return (
    <Layout>
      <SEO title={`${title} | project`} />

      <Hero
        label={title}
        image={featuredImage}
        video={video}
      />

      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Project
