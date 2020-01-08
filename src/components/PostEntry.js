import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'
import { blogURI } from '../../globals'

const PostEntry = ({ post }) => {
  const {uri, title, featuredImage, excerpt} = post

  return (
    <div>
      <header>
        <Link to={`${blogURI}/${uri}/`}>
          <h2>{title}</h2>
          <FluidImage image={featuredImage} />
        </Link>
      </header>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}/>
    </div>
  )
}

export default PostEntry
