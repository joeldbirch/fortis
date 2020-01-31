module.exports = (imports) => {
  return`
// This is a temporary generated file. Changes to this file will be overwritten!
import React from 'react'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'

// Sections
${imports.map(({ componentName, filePath }) => `import ${componentName} from '${filePath}';`).join('\n')}

const Page = ({ pageContext }) => {
  const {
    page: { title, pageBuilder, isFrontPage },
  } = pageContext

  const layouts = pageBuilder && pageBuilder.layouts ? pageBuilder.layouts : []

  return (
    <Layout
      AddToHeader={<h1 className={isFrontPage ? "visually-hidden" : "@mq-lap--font-size:500 @mq-tiny--font-size:400 font-size:300 font-weight:400"}>{title}</h1>}
    >
      <SEO title={title} />
      {
        layouts.map((layout, index) => {
          ${imports.map(({ componentName, layoutType }) => {
            return `
              if (layout.fieldGroupName === '${layoutType}') {
                  return <${componentName} {...layout} key={index} id={"section-"+index} />
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
