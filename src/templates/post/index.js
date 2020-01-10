import React  from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import FluidImage from '../../components/FluidImage'

const Post = ({ pageContext }) => {

  const {
    post: {title, content, featuredImage},
  } = pageContext

  return (
    <Layout>
      <SEO title={title} />

      <h1> {title} </h1>
      <FluidImage image={featuredImage} />
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Post
