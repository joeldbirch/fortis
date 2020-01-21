import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LargeText from 'components/LargeText'

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
  return <LargeText>
    {data.wpgraphql.newsIntro.introContent.introContent}
  </LargeText>
}

export default NewsIntro
