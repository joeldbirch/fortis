import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LargeText from 'components/LargeText'

const NewsIntro = (props) => {
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
  return <LargeText {...props}>
    {data.wpgraphql.newsIntro.content.introContent}
  </LargeText>
}

export default NewsIntro
