import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const NewsIntro = () => {
  const data = useStaticQuery(graphql`
    query NewsIntroQuery {
      wpgraphql {
        newsIntro {
          introContent {
            introContent
          }
        }
      }
    }
  `)

  return (
    <div dangerouslySetInnerHTML={{__html: data.wpgraphql.newsIntro.introContent.introContent}}/>
  )
}

export default NewsIntro
