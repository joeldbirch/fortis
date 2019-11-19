import React from 'react'
import Main from '../components/TheMain'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TheFooter from '../components/TheFooter'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      meta={[
        {
          name: `robots`,
          content: `noindex`,
        },
      ]}
    />
    <Main>
      <div>
        <h1 className="font-weight:400">Not Found</h1>
        <p className="margin-top:400">Sorry, no content exists at this address.</p>
      </div>
    </Main>
    <TheFooter />
  </Layout>
)

export default NotFoundPage
