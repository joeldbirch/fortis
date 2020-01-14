import React  from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ProjectDetails from '../../components/ProjectDetails'
import Hero from '../../layouts/Hero'

const Project = ({ pageContext }) => {

  const {
    project: {title, content, featuredImage, projectDetails},
  } = pageContext

  console.log({projectDetails});


  return (
    <Layout>
      <SEO title={`${title} | project`} />

      <Hero
        label={title}
        image={featuredImage}
        video={projectDetails.video}
      />

      <ProjectDetails
        title={title}
        content={content}
        {...projectDetails}
      />

    </Layout>
  )
}

export default Project
