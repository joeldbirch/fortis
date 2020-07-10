import React, {useState} from 'react'
import Divider from 'components/DividerHorizontal'
import FaqFilter from 'components/FilterForm'
import ScrollPrompt from 'components/ScrollPrompt'
import SectionHeader from 'components/SectionHeader'
import FaqSection from './FaqSection'
import {uiFontSize, sectionWrap} from 'styles/helpers'
import slugify from 'slugify'

const Faqs = ({sections = []}) => {
  const [shownPosts, setShownPosts] = useState(sections)

  sections.forEach(
    (section, index) => (section.id = `faq-${slugify(section.faqSectionTitle)}`)
  )

  const navItems = sections.map((section) => ({
    name: section.faqSectionTitle,
    id: section.id,
    count: 1,
  }))

  const changeShownPosts = (mustHaveIds = []) => {
    const newlyShownPosts =
      mustHaveIds.length < 1
        ? sections
        : sections.filter((section) => {
            const ids = [section.id]
            return mustHaveIds.every((id) => ids.includes(id))
          })
    setShownPosts(newlyShownPosts)
  }

  const isShown = ({id}) => {
    return shownPosts.map((post) => post.id).includes(id)
  }

  const filterReset = () => setShownPosts(sections)

  return (
    <section
      id="faq"
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
        <h2 className={uiFontSize}>FAQs</h2>

        <FaqFilter
          items={navItems}
          update={changeShownPosts}
          onReset={filterReset}
          className={`
          padding-top:400
          position:relative
        `}
        />
      </SectionHeader>

      <div
        className={`
          ${sectionWrap}
          js-contrast
          padding-top:columns-0-1/2
          padding-bottom:columns-1
        `}
        style={{
          '--max-height-var-1': `1000rem`,
        }}
      >
        {sections.map((section) => (
          <FaqSection
            data={section}
            key={section.id}
            className={`
              overflow:hidden
              transition-duration:700
              ${
                isShown(section)
                  ? `max-height:var-1 opacity:1`
                  : `max-height:0 opacity:0`
              }
            `}
          />
        ))}

        <ScrollPrompt to="#enquiries" />
        <Divider bottom={true} />
      </div>
    </section>
  )
}

export default Faqs
