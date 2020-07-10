import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {largerSizes} from 'utilities/helpers'
import FluidImage from 'components/FluidImage'
import ScrollPrompt from 'components/ScrollPrompt'
import SectionHeader from 'components/SectionHeader'
import Faqs from 'components/Faqs'
import SectionNav, {Item as SectionNavItem} from 'components/SectionNav'
import Divider from 'components/DividerHorizontal'
import EnquiryForm, {Field} from '../../project/EnquiryForm/EnquiryForm'
import {cleanWpContent} from 'utilities/helpers'
import {uiFontSize, sectionWrap} from 'styles/helpers'
import {Helmet} from 'react-helmet'

const CustomerResources = () => {
  const {
    wpgraphql: {
      pageBy: {
        title,
        resources: {
          introductionSection: {text: introText, image: introImage},
          testimonials,
          faqs,
        },
      },
    },
  } = useStaticQuery(graphql`
    query CustomerResourcesQuery {
      wpgraphql {
        pageBy(uri: "customers") {
          id
          title
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
            faqs {
              faqSectionTitle
              qandas {
                media {
                  image {
                    ...SquareImage
                  }
                }
                textual {
                  answer
                  question
                }
              }
            }
          }
        }
      }
    }
  `)

  /*
                  oo                dP
                                    88
88d888b. .d8888b. dP 88d888b. .d888b88 .d8888b. dP.  .dP
88'  `88 88'  `88 88 88'  `88 88'  `88 88ooood8  `8bd8'
88    88 88.  .88 88 88    88 88.  .88 88.  ...  .d88b.
dP    dP `88888P' dP dP    dP `88888P8 `88888P' dP'  `dP


dP   dP   dP
88   88   88
88   88   88
dP   dP   dP

oo   oo   oo


*/

  return (
    <>
      <Helmet
        meta={[
          {
            name: `robots`,
            content: `noindex`,
          },
        ]}
      />
      <section
        className={`
          js-contrast-ignore
        `}
      >
        <SectionNav title={title} headingPriority="1">
          <SectionNavItem to="#testimonials">Customer testimonials</SectionNavItem>
          <SectionNavItem to="#faq">FAQs</SectionNavItem>
          <SectionNavItem to="#info-series">Information Series</SectionNavItem>
        </SectionNav>

        <div
          className={`
            ${sectionWrap}
            js-contrast
            padding-bottom:site-top
            padding-top:columns-0-1/2
          `}
        >
          <div
            className={`
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
      </section>

      <section
        id="testimonials"
        className={`
          js-contrast-ignore
        `}
      >
        <SectionHeader
          absolute={false}
          className={`
            js-contrast
            js-no-header-bg
          `}
        >
          <h2 className={uiFontSize}>Customer testimonials</h2>
        </SectionHeader>
        <div
          className={`
            ${sectionWrap}
            js-contrast
            padding-top:columns-0-1/2
            display:grid
            grid-gap:800
            @mq-palm--grid-gap:columns-0-1/2
            padding-bottom:site-top
          `}
        >
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

          <ScrollPrompt to="#faq" />
          <Divider bottom={true} />
        </div>
      </section>

      {/*

 88888888b  .d888888   .88888.
 88        d8'    88  d8'   `8b
a88aaaa    88aaaaa88a 88     88  .d8888b.
 88        88     88  88  db 88  Y8ooooo.
 88        88     88  Y8.  Y88P        88
 dP        88     88   `8888PY8b `88888P'
*/}

      <Faqs sections={faqs} />

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
