import React from 'react'
import Helmet from 'react-helmet'
import { callOut } from '../styles/helpers'

import Main from '../components/TheMain'
import Image from '../components/image'
import Layout from '../components/layout'

import TheFooter from '../components/TheFooter'
import SEO from '../components/seo'

const ThankYouPage = () => (
  <Layout className="bg-color:beige-100">
    <SEO title="Thank you!" />
    <Helmet
      meta={[
        {
          name: `robots`,
          content: `noindex`,
        },
      ]}
    />

    <Main>
      <Image />
      <div>
        <h1 className={callOut}>
          Thank you for your enquiry, we will be in contact&#160;soon!
        </h1>
      </div>
    </Main>

    <TheFooter />
  </Layout>
)

export default ThankYouPage
