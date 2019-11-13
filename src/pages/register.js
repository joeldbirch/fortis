import React from 'react'
import * as commonStyles from '../styles/helpers'

import Image from '../components/image'
import Layout from '../components/layout'
import Main from '../components/TheMain'
import PartIntro from '../components/PartIntro'
// import PartCallout from '../components/PartCallout'
import PartTextBottom from '../components/PartTextBottom'
import RegistrationForm from '../components/RegistrationForm'
import BaseSubHeading from '../components/BaseSubHeading'
import BaseH3 from '../components/BaseH3'
import RuledSubHeading from '../components/RuledSubHeading'
import BaseContactDetails from '../components/BaseContactDetails'
import TheFooter from '../components/TheFooter'
import SEO from '../components/seo'


const styles = {
  ...commonStyles,

  contactWrap: `
    ${commonStyles.container}
    display:grid
    grid-template-columns:1
    grid-gap:700vw
    @mq-bigdesk--grid-gap:vert2
  `,

  subSection: `
    display:grid
    grid-template-columns:1
    @mq-widepalm--grid-template-columns:var1
    @mq-desk--grid-template-columns:var2
  `,

  regoFooter: `
    bg-color:beige-100
  `,
}


const SubSection = ({
  children,
  className = ``,
  style = {},
  ...props
}) => {
  className += styles.subSection

  const defaultStyles = {
    '--grid-template-columns-var1': `2fr 8fr`,
    '--grid-template-columns-var2': `2fr 6fr 2fr`,
  }

  return (
    <section
      className={ className }
      { ...props }
      style={Object.assign({}, defaultStyles, style)}
    >
      { children }
    </section>
  )
}

const RegistrationPage = () => (
  <Layout>

    <SEO
      title="Enquire here"
      keywords={[`Bower`, `enquiries`, `South Yarra`]}
    />

    <Main>

      <Image
        name="terrace"
        className={`
          @mq-palm--margin-left:-400
          @mq-palm--margin-right:100p
          @mq-lap--margin-left:-600
          @mq-wall--margin-left:-100p
      `}/>

      <PartIntro
        image={(className) => (
          <Image name="image38Chairs" className={className} />
        )}
        imageCaption={() => (
          <>
            Thirty Eight Chairs, South&#160;Yarra
          </>
        )}
        bodyText={() => (
          <>
            18 Chambers St, South&#160;Yarra.<br/>
            Six&#160;half-floor 3-bedroom residences and a sweeping full-floor penthouse
          </>
        )}
      >
        <h1 className={`${styles.callOutText} font-family:serif`}>
          Tucked away in a quiet enclave just 50m from Chapel&#160;St and Toorak&#160;Rd, Bower embodies effortless living, perfectly positioned.
        </h1>
      </PartIntro>

      <Image
        name="penthouseLiving"
        className={`
          @mq-palm--margin-left:-400
          @mq-palm--margin-right:200p
          @mq-lap--margin-left:-600
          @mq-wall--margin-left:-100p
        `}
      />

      <div
        className={`
          ${styles.padTop1}
          ${styles.padBottom3}
          @mq-palm--margin-left:100p
          @mq-palm--width:60
          @mq-lap--width:50
        `}>
        <p className={styles.bodyText}>
          A haven of peace, space and comfort, the living room invites with warm sophistication. Ample floor-to-ceiling glazing floods the interior with light, opening out to a generous terrace and city&#160;views.
        </p>
      </div>

      {/* <PartCallout
        image={(className) => (
          <Image name="chair" className={className} />
        )}
      >
        <blockquote>
          <p className={`${styles.callOutText} hanging-punctuation-first`}>
            “The interplay between the features and finishes adds a layer of texture, unique tactile quality, and sense of&#160;luxe.”
          </p>
          <p className={`
            @mq-desk--font-size:400
            font-size:300
            @mq-max-palm--padding-top:400
            @mq-palm--padding-top:500
          `}>
            Simone MacGinley,<br/>
            Interior Designer, Ewert Leaf
          </p>
        </blockquote>
      </PartCallout> */}

      <Image name="kitchen"
        className={`
          @mq-palm--margin-left:200p
          @mq-palm--margin-right:-400
          @mq-lap--margin-right:-600
          @mq-desk--margin-right:0
        `}
      />


      <div
        className={`
          ${styles.padTop1}
          ${styles.padBottom3}
          @mq-palm--margin-left:200p
          @mq-lap--width:50
          @mq-palm--width:60
        `}>
        <p className={styles.bodyText}>
          Table for ten or dinner for two, the kitchen is the hero of each residence. Calm and curated, the clean-line aesthetic offers optimum functionality with extensive storage throughout.
        </p>
      </div>


      <div
        className={`
          ${styles.tintWrap}
          ${styles.padTop3}
          ${styles.padBottom3}
          bg-color:green-300
        `}>
        <div
          className={`
            ${styles.containerBase}
            text-align:center
          `}>
          <BaseSubHeading className={`
            ${styles.padBottom1}
            @mq-max-palm--font-size:200
          `}>
            A realm of one’s&#160;own
          </BaseSubHeading>
          <p
            style={{maxWidth: '11.5em'}}
            className={`
              font-family:serif
              margin-horizontal:auto
              font-size:grow700
          `}>
            Retreat to pure escapism behind closed&#160;doors.<br/>
            Peace, quiet, perfection. All&#160;yours to revel&#160;in.
          </p>
        </div>
      </div>


      <div className={`${styles.padTop3}`}>
        <Image name="vignetteKitchen" className="@mq-palm--width:70" />
      </div>

      <div className={`${styles.padTop3}`}>
        <Image name="placeholderImage"
          className={`
            @mq-palm--margin-left:-400
            @mq-lap--margin-left:-600
            @mq-wall--margin-left:-100p
          `}
        />
      </div>



      <div
        className={`
          ${styles.padBottom3}
          ${styles.padTop1}
          @mq-lap--margin-left:400p
          @mq-lap--width:50
          @mq-palm--margin-left:300p
          @mq-palm--width:60
        `}>
        <p className={styles.bodyText}>
          Drenched in northern sunlight, space and privacy, the expansive outdoor terraces are made for entertaining and unwinding in equal measure. A&#160;resort-like feel that’s perfectly at&#160;home.
        </p>
      </div>


      <PartTextBottom
        imageName="bedroom"
      >
        <p className={`${styles.bodyText}`}>
          Imbued with an earthy palette and rich wool carpet, each bedroom offers a subliminal connection to nature. Sunlit, quiet, with ample wardrobe and views; the calm away from the outside world.
        </p>
      </PartTextBottom>


      <Image name="ensuite"
        className={`
          @mq-palm--margin-right:-400
          @mq-lap--margin-right:-600
          @mq-wall--margin-right:-100p
        `}
      />


      <div
        className={`
          ${styles.padBottom3}
          ${styles.padTop1}
          @mq-palm--margin-left:100p
          @mq-lap--width:50
          @mq-palm--width:60
        `}>
        <p className={styles.bodyText}>
          Embedded with exquisite finishes and materials, the bathrooms exude textural luxe. Sleek yet tactile, the custom-routed stone, slimline benchtops and integrated basins offer daily indulgence.
        </p>
      </div>


      <section className={`${styles.tintWrap} ${styles.padBottom3} bg-color:neutral-0`}>
        <div className={`${styles.container} ${styles.padTop2}`}>
          <RuledSubHeading>
            Developer
          </RuledSubHeading>
          <div className={`@mq-palm--display:flex`}>
            <div
              className={`
                @mq-palm--width:50
                padding-top:vert1
              `}>
              <BaseH3>Fortis Development Group</BaseH3>
            </div>
            <div
              className={`
                @mq-palm--width:50
                padding-top:vert1
              `}>
              <p className={`${styles.bodyText} padding-bottom:vert1`}>
                Comprising industry-leading professionals, Fortis Development Group is one of Australia’s foremost developers. Meticulous in our attention to detail, we partner with renowned architects, designers and builders who share our vision – and passion: to bring beautiful, bespoke homes uncompromisingly to life.
              </p>
              <p>
                <a href="https://www.fortis.com.au" className={`${styles.button}`}>Discover More</a>
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.container} ${styles.padTop2}`}>
          <RuledSubHeading>
            Project Partners
          </RuledSubHeading>
          <div className={`@mq-palm--display:flex`}>
            <div
              className={`
                @mq-palm--width:50
                padding-right:vert1
                padding-top:vert1
              `}>
              <BaseH3 className={`padding-bottom:vert1`}>Bruce Henderson Architects</BaseH3>
              <p className={styles.bodyText}>
                Inspired by form and space, light and shadow, colour and texture; Bruce Henderson Architects create beautiful, sustainable buildings of quality and innovation. This, along with functional and financial considerations, ensures practical, viable, better-built environments for the community.
              </p>
            </div>
            <div
              className={`
                @mq-palm--width:50
                padding-top:vert1
              `}>
              <BaseH3 className={`padding-bottom:vert1`}>Ewert Leaf</BaseH3>
              <p className={styles.bodyText}>
                Ewert Leaf is a dynamic, multi-disciplinary design firm with experience in all aspects of architecture, interiors, urban design and landscape architecture. Balancing creativity and practicality, the team creates innovative yet pragmatic design solutions that are both contemporary and enduring.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div id="enquiries"
        className={`
          ${styles.tintWrap}
          ${styles.padTop3}
          ${styles.padBottom2}
        `}
      >
        <div className={styles.contactWrap}>
          <SubSection
            className={`
              @mq-lap--margin-top:-500
              no-grid-gap--margin-bottom:700
            `}>
            <BaseSubHeading
              className={`
                @mq-desk--padding-top:650
                @mq-lap--padding-top:675
                @mq-widepalm--padding-top:550
              `}>
              Enquire Now
            </BaseSubHeading>
            <RegistrationForm />
          </SubSection>

          <SubSection
            style={{
              '--grid-template-columns-var2': `2fr 8fr`,
            }}
          >
            <BaseSubHeading
              className={`
                margin-bottom:300
                @mq-desk--padding-top:0
                @mq-widepalm--padding-top:150
              `}
            >
              Contact
            </BaseSubHeading>

            <div
              className={`
                display:flex
                display:grid
                flex:wrap
                grid-gap:400
                justify-content:space:between
                @mq-desk--grid-gap:0
                @mq-desk--grid-template-columns:var2
                @mq-lap--grid-gap:400
                @mq-lap--grid-template-columns:var1
              `}
              style={{
                '--grid-template-columns-var1': `2fr 2fr 2fr`,
                '--grid-template-columns-var2': `3fr 3fr 2fr`,
              }}
            >
              <BaseContactDetails
                firstName="Marcus"
                lastName="Chiminello"
                email="mc@marshallwhite.com.au"
                phone="0411 411 271"
              />
              <BaseContactDetails
                firstName="Brendan"
                lastName="Allen"
                email="ba@marshallwhite.com.au"
                phone="0499 229 007"
              />
              <BaseContactDetails
                firstName="Anna"
                lastName="Perry"
                email="ap@marshallwhite.com.au"
                phone="0434 212 271"
              />
            </div>
          </SubSection>
        </div>
      </div>
    </Main>


    <TheFooter className={styles.regoFooter} />
  </Layout>
)

export default RegistrationPage
