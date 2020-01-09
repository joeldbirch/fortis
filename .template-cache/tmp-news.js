
// This is a temporary generated file. Changes to this file will be overwritten!
import React from 'react'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import { convertAmpersands } from '../src/utilities/helpers'

// Sections


const Page = ({ pageContext }) => {
  const {
    page: { title, pageBuilder },
  } = pageContext

  const layouts = pageBuilder && pageBuilder.layouts ? pageBuilder.layouts : []

  return (
    <Layout>
      <SEO title={convertAmpersands(title)} />

      <h1>{convertAmpersands(title)}</h1>
      {
        layouts.map((layout, index) => {
          
        })
      }
    </Layout>
  )
}

export default Page
  