import React, { useState } from 'react'
import * as commonStyles from '../styles/helpers'

import Image from '../components/image'
import Layout from '../components/layout'
import Main from '../components/TheMain'
import PartText from '../components/PartText'
import TheFooter from '../components/TheFooter'
import Header from '../components/header'
import SEO from '../components/seo'
import FormModal from '../components/FormModal/index'
import RegistrationForm from '../components/RegistrationForm'

const styles = {
  ...commonStyles,

  contactWrap: `
    ${commonStyles.container}
    display:grid
    grid-template-columns:1
    grid-gap:700vw
    @mq-bigdesk--grid-gap:vert2
  `,

  regoFooter: `
    background-color:beige-100
  `,
}

const RegistrationPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <Layout
      className={`
        padding-top:site-pad-100
      `}
    >
      <SEO
        title="Request floor plans"
        keywords={[`Ode of Toorak`, `property`, `development`]}
      />

      <Header
        siteTitle={`ODE of Toorak`}
        ctaClickHandler={openModal}
      />

      <div className="flex-grow:1 flex-shrink:0 display:flex flex-direction:column">
        <Main>

          <PartText
            imageName="kitchen"
            imageWrapClassName={`
              @mq-palm--margin-left:-site-pad-100
              @mq-bigdesk--margin-left:0
            `}
            textClassName={`
              @mq-palm--margin-top:auto
              @mq-max-palm--margin-top:400
              @mq-palm--padding-left:site-pad-200
              @mq-lap--padding-right:site-pad-200
              @mq-palm--width:50
              @mq-desk--width:40
            `}
          >
            <p className={`
              ${styles.bodyText}
            `}>
              Founded on the past, created for tomorrow, Ode has been meticulously curated for enduring perfection in&#160;residence.
            </p>
            <p className={`
              ${styles.bodyText}
              margin-top:400
            `}>
              Open and elegant. Calm and private.
            </p>
            <p className={`
              ${styles.bodyText}
              margin-top:400
            `}>
              From the very foundations, these seven boutique, 3-bedroom residences are a living tribute to the area and those who reside in&#160;it.
            </p>
          </PartText>

          <div className={`
            margin-vertical:site-pad-200
          `}>
            <Image
              name="courtyard"
            />
          </div>


          <PartText
            imageName="dining"
            className={`
              flex-direction:row-reverse
            `}
            imageWrapClassName={`
              margin-bottom:site-pad-200
              @mq-palm--margin-bottom:0

              @mq-palm--margin-right:-site-pad-100
              @mq-bigdesk--margin-right:0

            `}
            imageClassName={`

            `}
            textClassName={`
              position:relative
              @mq-bigdesk--pos-left:0
              @mq-bigdesk--padding-right:site-pad
              @mq-palm--pos-left:-site-pad
              @mq-palm--width:50
            `}
          >
            <h2 className={`
              ${styles.bodyText}
            `}>
              Features include
            </h2>
            <div className="albatross margin-vertical:400">
              <ul className={`
                ${styles.bodyText}
                margin-bottom:400
                margin-top:400
                list-style:disc
                padding-left:500
                columns:2
                @mq-palm--columns:auto
                @mq-desk--columns:2
              `}
              style={{
                columnGap: `7vmin`,
              }}
              >
                <li>Single floor living</li>
                <li>Lift entry, to private foyer</li>
                <li>Private outdoor terraces</li>
                <li>Feature joinery and fireplaces</li>
                <li>Double-glazed windows</li>
                <li>Concealed air-conditioning</li>
                <li>Miele appliances</li>
                <li>Two car parks</li>
                <li>Powder room</li>
                <li>Separate walk-in laundry</li>
                <li>Butler’s pantry</li>
                <li>Audio visual intercom</li>
                <li>Provisions for electric car charging</li>
                <li>Separate storage enclosures on title</li>
                <li>Meets VIC BASIX Energy Targets</li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className={`
                ${commonStyles.button}
                ${commonStyles.bodyText}
                margin-top:auto
                margin-horizontal:auto
              `}>
              More info
            </button>

          </PartText>

          <div className={`
            margin-vertical:site-pad-200
          `}>
            <Image
              name="living"
            />
          </div>


          <PartText
            imageName="bathroom"
            imageWrapClassName={`
              @mq-palm--margin-left:-site-pad-100
              @mq-bigdesk--margin-left:0
            `}
            textClassName={`
              @mq-max-palm--margin-top:400
              @mq-palm--padding-left:site-pad-200
              @mq-lap--padding-right:site-pad-200
              @mq-palm--width:50
              @mq-desk--width:40
            `}
          >
            <blockquote
              className={`
                padding:0
                margin:0
              `}>

              <p className={`
                ${styles.bodyText}
                margin-bottom:400
                font-style:italic
              `}
                style={{
                  hangingPunctuation: `first`,
                }}
              >
                “The design vision for Ode was to create a strong, clean form without unnecessary detail. The building’s exterior is bold yet refined through the selection of quality materials and subtle design elements. This outer strength creates contrast with the calming sense of home inside.”
              </p>
              <p className={`
                ${styles.bodyText}
                margin-bottom:400
              `}>
              <span className="font-weight:500">Cathryn Tattersall</span><br />
              Architect— Ewert Leaf
              </p>
            </blockquote>

            <button
              onClick={openModal}
              className={`
                ${commonStyles.button}
                ${commonStyles.bodyText}
                margin-top:auto
              `}>
              More info
            </button>



          </PartText>

          <div className={`
            margin-vertical:site-pad-200
          `}>
            <Image
              name="hero"
            />
          </div>

          <FormModal
            isOpen={modalOpen}
            onRequestClose={closeModal}
          >
            <>
              <h3 className={`
                font-size:600
                @mq-widepalm--font-size:700
                line-height:300
                font-weight:400

                margin-bottom:400
                @mq-widepalm--margin-bottom:600
                margin-right:700
                max-width:20rem
                @mq-widepalm--max-width:caption
              `}
              >
                Please complete this form to access your floor plan and material options.
              </h3>
              <div
                className={`
                  @mq-widepalm--display:flex
                  @mq-widepalm--flex-direction:row-reverse
                `}
              >
                <p
                  className={`
                    font-size:300
                    margin-bottom:500
                    @mq-widepalm--margin-bottom:700
                    @mq-widepalm--margin-left:700
                    @mq-widepalm--margin-top:300
                    max-width:20rem
                  `}
                  style={{
                    flexBasis: `12em`,
                  }}
                >
                  If you’d prefer to call, please speak to Sarah&#160;Case at RT&#160;Edgar on <a
                    className={`
                      color:inherit
                      &:hocus--text-decoration:underline
                    `}
                    href="tel:0439431020"
                  >
                    0439&#160;431&#160;020
                  </a>
                </p>
                <RegistrationForm
                  className={`
                    @mq-widepalm--flex-grow:1
                  `}
                />
              </div>
              <button
                className={`
                  font-size:950
                  position:absolute
                  pos-right:0
                  pos-top:0
                  opacity:60
                  &:hocus--opacity:100
                `}
                onClick={closeModal}
                style={{
                  padding: `2.75rem`
                }}
              > &times; </button>
            </>
          </FormModal>

        </Main>

        <p className={`
          ${styles.bodyText}
          margin-bottom:site-pad-200
          text-align:center
        `}>
          Construction commenced,<br />move in December 2020.
          <button
            onClick={openModal}
            className={`
              ${commonStyles.button}
              ${commonStyles.bodyText}
              margin-top:site-pad
              margin-horizontal:auto
              display:block
            `}>
            More info
          </button>
        </p>


        <TheFooter className={styles.regoFooter} />
      </div>
    </Layout>
  )
}

export default RegistrationPage
