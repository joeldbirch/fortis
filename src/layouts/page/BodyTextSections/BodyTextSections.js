import React from 'react'
import PropTypes from 'prop-types'
import {cleanWpContent} from 'utilities/helpers'
import Divider from 'components/DividerHorizontal'

const BodyTextSections = ({sections}) => {
  if (sections.length < 1) return ``
  return (
    <div
      className={`
        js-contrast
        margin-horizontal:auto
        max-width:container
        padding-top:site-top
      `}
    >
      {sections.map(({...props}, index) => (
        <SectionEntry {...props} key={`profile-${index}`} />
      ))}
    </div>
  )
}

const SectionEntry = ({bodyCopy = ``, headingStyle = null, sectionHeading = ``}) => {
  return (
    <section
      className={`
        @mq-desk--grid-gap:columns-1
        @mq-desk--grid-template-columns:var-3
        @mq-palm--padding-bottom:columns-1
        @mq-desk--padding-horizontal:columns-1-1/2
        @mq-lap--grid-gap:columns-0-1/2
        @mq-lap--grid-template-columns:var-2
        @mq-palm--grid-gap:columns-0-1/2
        @mq-palm--grid-template-columns:var-1
        @mq-palm--padding-vertical:columns-0-1/2
        display:grid
        grid-gap:600
        padding-bottom:800
        padding-horizontal:columns-0-1/2
        padding-top:800
        position:relative
      `}
      style={{
        '--grid-template-columns-var-1': `2.5fr 9fr`,
        '--grid-template-columns-var-2': `2.5fr 2.5fr 6fr`,
        '--grid-template-columns-var-3': `1fr 2fr 5fr`,
      }}
    >
      <Divider />
      <header
        className={`
          @mq-lap--grid-column:2
        `}
      >
        <h2
          className={`
            ${headingStyle ? `handwritten` : ``}
            font-size:400
            font-weight:400
            line-height:300
          `}
          dangerouslySetInnerHTML={{__html: sectionHeading}}
        />
      </header>

      <div
        className={`
          s-editable
        `}
        dangerouslySetInnerHTML={{__html: cleanWpContent(bodyCopy)}}
      />
    </section>
  )
}

BodyTextSections.propTypes = {
  profiles: PropTypes.array,
}

export default BodyTextSections
