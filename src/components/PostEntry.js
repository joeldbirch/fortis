import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'

const PostEntry = ({ post, parentUri }) => {
  const {uri, title, featuredImage, excerpt} = post

  return (
    <div>
      <header>
        <Link to={`${parentUri}/${uri}/`}>
          <h2>{title}</h2>
          <FluidImage image={featuredImage} />
        </Link>
      </header>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}/>
    </div>
  )
}

export default PostEntry
