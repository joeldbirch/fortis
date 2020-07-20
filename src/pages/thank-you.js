import React from 'react'
import Layout from 'components/Layout'
import TextBlock from 'layouts/page/TextBlock'
import SEO from 'components/SEO'
import {navigate} from '@reach/router'

const Thankyou = () => {
  const back = (e) => {
    e.preventDefault()
    navigate(-1, {replace: true})
  }

  return (
    <Layout
      AddToHeader={<h1 className="visually-hidden">Thank you</h1>}
      showMenu={false}
    >
      <SEO
        title="Thank you"
        meta={[
          {
            name: `robots`,
            content: `noindex`,
          },
        ]}
      />

      <TextBlock className={`js-contrast`}>
        <p>Thank you, we’ll be in touch shortly.</p>
        <p>
          <a
            href="/"
            className={`btn font-size:300 margin-top:400 display:inline-block`}
            onClick={back}
          >
            &larr; Back to our home
          </a>
        </p>
      </TextBlock>
    </Layout>
  )
}

export default Thankyou
