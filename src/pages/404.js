import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

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

    <div>
      <h1 className="font-weight:400">Not Found</h1>
      <p className="margin-top:400">Sorry, no content exists at this address.</p>
    </div>

  </Layout>
)

export default NotFoundPage
