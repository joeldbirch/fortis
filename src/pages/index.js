import React, { useState } from 'react'
import * as commonStyles from '../styles/helpers'

import Image from '../components/image'
import Layout from '../components/layout'
import Main from '../components/TheMain'
import PartText from '../components/PartText'
import TheFooter from '../components/TheFooter'
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
      ctaClickHandler={openModal}
    >

      <SEO
        title="Request floor plans"
        keywords={[`Bower`, `enquiries`, `South Yarra`]}
      />

      <Main>

        <PartText
          imageName="bedroom"
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
            name="terrace"
          />
        </div>


        <PartText
          imageName="bedroom"
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
              <li>Concealed, air-conditioning</li>
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
            name="ensuite"
          />
        </div>


        <PartText
          imageName="bedroom"
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
            name="ensuite"
          />
        </div>

        <FormModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
        >
          <RegistrationForm />
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
          margin-top:site-pad
          margin-horizontal:auto
          display:block
        `}>
        More info
      </button>
      </p>


      <TheFooter className={styles.regoFooter} />
    </Layout>
  )
}

export default RegistrationPage
