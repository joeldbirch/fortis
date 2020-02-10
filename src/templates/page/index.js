module.exports = (imports) => {
  return`
// This is a temporary generated file. Changes to this file will be overwritten!
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'

// Sections
${imports.map(({ componentName, filePath }) => `import ${componentName} from '${filePath}';`).join('\n')}

const Page = ({ pageContext }) => {
  const {
    page: { title, uri, pageBuilder, isFrontPage },
  } = pageContext

  const { site } = useStaticQuery(
    graphql\`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    \`
  )

  const layouts = pageBuilder && pageBuilder.layouts ? pageBuilder.layouts : []

  return (
    <Layout
      className={isFrontPage ? "scroll-snap-type:y-proximity  @mq-desk--scroll-snap-type:y-mandatory" : ""}
      AddToHeader={
        isFrontPage
        ? <h1 className="visually-hidden">{site.siteMetadata.title}</h1>
        : <h1 className="
            @mq-lap--font-size:500
            @mq-tiny--font-size:400
            font-size:300
            font-weight:400
          ">{title}</h1>
      }
    >
      <SEO title={title} />
      {
        layouts.map((layout, index) => {
          ${imports.map(({ componentName, layoutType }) => {
            return `
              if (layout.fieldGroupName === '${layoutType}') {
                  const pageUri = isFrontPage ? "" : uri
                  const nextIndex = index + 1
                  const isNotLast = index < layouts.length - 1
                  const nextSection = isNotLast ? "/"+pageUri+"#section-" + nextIndex : null
                  return <${componentName} {...layout} key={index} id={"section-" + index} nextSection={nextSection} />
              }
            `
          }).join('\n')}
        })
      }
    </Layout>
  )
}

export default Page
  `
}
