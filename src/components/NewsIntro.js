import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LargeText from 'components/LargeText'

const NewsIntro = () => {
  const data = useStaticQuery(graphql`
    query NewsIntroQuery {
      wpgraphql {
        newsIntro {
          content {
            introContent
          }
        }
      }
    }
  `)
  return <LargeText>
    {data.wpgraphql.newsIntro.content.introContent}
  </LargeText>
}

export default NewsIntro
