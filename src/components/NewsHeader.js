import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { uiFontSize } from '../styles/helpers'

const NewsHeader = ({isMain=false, headingText=``}) => {

  const data = useStaticQuery(graphql`
    query NewsHeaderQuery {
      wpgraphql {
        newsIntro {
          content {
            siteSectionTitle
          }
        }
      }
    }
  `)

  const HeadingTag = isMain ? `h1` : `h2`

  return (
    <HeadingTag
      className={`
        ${uiFontSize}
      `}
      dangerouslySetInnerHTML={{
        __html: headingText
            ?  headingText
            : data.wpgraphql.newsIntro.content.siteSectionTitle}}
    />

  )
}

export default NewsHeader
