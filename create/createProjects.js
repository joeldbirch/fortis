import React from 'react'
import { graphql } from 'gatsby'
​
const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
​
export const query = graphql`
  {
    projects {
      edges {
        node {
          projectTags {
            edges {
              node {
                id
                slug
                name
              }
            }
          }
          projectDetails {
            buildingType
            fieldGroupName
            fullAddress
            status
            suburb
            logo {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`
​
export default ComponentName
​
