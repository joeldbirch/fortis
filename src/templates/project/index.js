import React  from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ProjectDetails from '../../components/ProjectDetails'
import Hero from '../../layouts/Hero'

const Project = ({ pageContext }) => {

  const {
    project: {
      title,
      featuredImage,
      projectDetails,
    },
  } = pageContext


  return (
    <Layout>
      <SEO title={`${title} | project`} />

      <Hero
        label={title}
        image={featuredImage}
        video={projectDetails.detailsTable.mediaDetails.video}
      />

      <ProjectDetails
        title={title}
        {...projectDetails}
      />

    </Layout>
  )
}

export default Project
