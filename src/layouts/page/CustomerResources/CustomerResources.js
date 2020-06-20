import React from 'react'
import {largerSizes} from 'utilities/helpers'
import FluidImage from 'components/FluidImage'
import ScrollPrompt from 'components/ScrollPrompt'
import SectionHeader from 'components/SectionHeader'
import Divider from 'components/DividerHorizontal'
import {useStaticQuery, graphql} from 'gatsby'
import {cleanWpContent} from 'utilities/helpers'
import EnquiryForm, {Field} from '../../project/EnquiryForm/EnquiryForm'

const styles = {
  sectionWrap: `
    js-contrast
    margin-horizontal:auto
    max-width:container
    padding-bottom:400
    padding-horizontal:columns-0-1/2
    @mq-desk--padding-horizontal:columns-1-1/2
    position:relative
    width:100
    z-index:100
  `,
}

const CustomerResources = () => {
  const {
    wpgraphql: {
      pageBy: {
        resources: {
          introductionSection: {text: introText, image: introImage},
          testimonials,
        },
      },
    },
  } = useStaticQuery(graphql`
    fragment PortraitImage on WPGraphQL_MediaItem {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1000, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }

    query CustomerResourcesQuery {
      wpgraphql {
        pageBy(uri: "customers") {
          id
          resources {
            fieldGroupName
            introductionSection {
              text
              image {
                ...PortraitImage
              }
            }
            testimonials {
              text
              image {
                ...PortraitImage
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div
        className={`
          ${styles.sectionWrap}
          padding-bottom:site-top
        `}
      >
        <div
          className={`
            padding-top:site-top
            display:grid
            @mq-max-palm--grid-gap:800
            @mq-palm--grid-template-columns:2

          `}
        >
          <div
            dangerouslySetInnerHTML={{__html: cleanWpContent(introText)}}
            className={`
              @mq-palm--padding-right:columns-1
              @mq-lap--margin-top:columns-1
              can-style-note
              s-editable
              @mq-palm--font-size:500
              @mq-bigdesk--font-size:600
            `}
          />

          <FluidImage
            image={introImage}
            className={`
              @mq-palm--flex-grow:1
            `}
            sizes={largerSizes}
          />
        </div>
        <ScrollPrompt to="#testimonials" />
        <Divider bottom={true} />
      </div>

      <div
        id="testimonials"
        className={`
          ${styles.sectionWrap}
          padding-top:site-top
          display:grid
          grid-gap:800
          @mq-palm--grid-gap:columns-0-1/2
          padding-bottom:site-top
        `}
      >
        <SectionHeader>Customer testimonials</SectionHeader>
        {testimonials.map(
          ({text: testimonialText, image: testimonialImage}, index) => (
            <div
              key={index}
              className={`
                align-items:center
                @mq-palm--display:grid
                grid-template-columns:2
              `}
            >
              <FluidImage
                image={testimonialImage}
                className={`
                  @mq-palm--flex-grow:1
                `}
                sizes={largerSizes}
              />
              <div
                key={index}
                dangerouslySetInnerHTML={{__html: cleanWpContent(testimonialText)}}
                className={`
                  @mq-palm--padding-left:columns-1
                  padding-top:600
                  @mq-lap--padding-vertical:columns-1
                  can-style-note
                  s-editable
                `}
              />
            </div>
          )
        )}

        <ScrollPrompt to="#enquiries" />
        <Divider bottom={true} />
      </div>
      {/* Need to get Kristina to set up a "customer question" form in Hubspot for the form to go to via Netlify then Zapier then Hubspot. */}

      <EnquiryForm
        id="enquiries"
        formIntroText="If you have a question you’d like the Fortis development team to answer, please submit below."
        slug="customer-question"
      >
        <Field label="First name" minLength="2" />
        <Field label="Last name" minLength="2" />
        <Field label="Email" type="email" minLength="5" />
        <Field
          style={{
            '--min-height': `6rem`,
          }}
          label="Question"
          as="textarea"
          type={null}
          inputClassName={`
            min-height:var-1
          `}
          minLength="6"
        />
      </EnquiryForm>
    </>
  )
}

export default CustomerResources
