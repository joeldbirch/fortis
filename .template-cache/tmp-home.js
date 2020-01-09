
// This is a temporary generated file. Changes to this file will be overwritten!
import React from 'react'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import { convertAmpersands } from '../src/utilities/helpers'

// Sections
import Branded from '../src/layouts/Branded';
import Hero from '../src/layouts/Hero';
import TextBlock from '../src/layouts/TextBlock';
import NewsOverview from '../src/layouts/NewsOverview';

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
          
              if (layout.fieldGroupName === 'page_Pagebuilder_Layouts_Branded') {
                  return <Branded {...layout} key={index} />;
              }
            

              if (layout.fieldGroupName === 'page_Pagebuilder_Layouts_Hero') {
                  return <Hero {...layout} key={index} />;
              }
            

              if (layout.fieldGroupName === 'page_Pagebuilder_Layouts_TextBlock') {
                  return <TextBlock {...layout} key={index} />;
              }
            

              if (layout.fieldGroupName === 'page_Pagebuilder_Layouts_NewsOverview') {
                  return <NewsOverview {...layout} key={index} />;
              }
            
        })
      }
    </Layout>
  )
}

export default Page
  