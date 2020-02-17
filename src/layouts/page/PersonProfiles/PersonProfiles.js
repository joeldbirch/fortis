import React from 'react'
import PropTypes from 'prop-types'
import FluidImage from 'components/FluidImage'
import { subhead } from 'styles/helpers'
import { cols, mq } from 'utilities/helpers'

const PersonProfiles = ({profiles=[]}) => {
  if (profiles.length < 1) return ``
  return (
    <div
      className={`
        padding-bottom:400
        @mq-palm--padding-bottom:columns-0-1/2
        max-width:container
        margin-horizontal:auto
      `}
    >
      { profiles.map((profile, index) => <ProfileEntry profile={profile} key={`profile-${index}`} />) }
    </div>
  )
}

const ProfileEntry = ({
  profile: {
    group1: {
      start: {
        image,
      },
      end: {
        name,
        position,
        note,
        description,
      },
    },
  },
}) => {
  return (
    <div
      className={`
        padding-horizontal:columns-0-1/2
        @mq-desk--padding-horizontal:columns-1-1/2
        padding-vertical:400
        @mq-palm--padding-vertical:columns-0-1/2
        grid-gap:400
        @mq-palm--grid-gap:columns-0-1/2
        @mq-lap--grid-gap:columns-1
        display:grid
        @mq-palm--grid-template-columns:var-1
        @mq-lap--grid-template-columns:var-2
        @mq-desk--grid-template-columns:var-3
      `}
      style={{
        '--grid-template-columns-var-1': `6fr 6fr`,
        '--grid-template-columns-var-2': `5fr 6fr`,
        '--grid-template-columns-var-3': `4fr 5fr`,
      }}
    >
      <FluidImage
        image={image}
        className={`
          grid-column:1
          @mq-palm--grid-row:1
        `}
        sizes={`
          (max-width: ${mq.toPalm}) ${cols(5)}vw,
          (min-width: ${mq.bigdesk}) ${cols(4)}vw,
          (min-width: ${mq.desk}) ${cols(5)}vw,
          (min-width: ${mq.widepalm}) ${cols(6)}vw,
          (min-width: ${mq.palm}) ${cols(5.5)}vw
        `}
      />

      <div
        className={`
          @mq-desk--padding-right:columns-0-1/2
          @mq-bigdesk--padding-right:columns-1
        `}
      >
        <h2
          className={`
            margin-bottom:400
            @mq-palm--margin-bottom:columns-0-1/2
            rhythm-fix-before
          `}
        >
          <span
            className={`
              ${subhead}
              display:block
            `}
          >
            {name}
          </span>
          <span
            className={`
              display:block
              text-transform:uppercase
              font-size:300
              font-weight:400
            `}
          >
            {position}
          </span>
        </h2>

        <p
          dangerouslySetInnerHTML={{__html: note}}
          className={`
            handwritten
            margin-bottom:400
            @mq-palm--margin-bottom:columns-0-1/2
            font-size:note
          `}
        />

        <div
          dangerouslySetInnerHTML={{__html: description}}
          className={`
            s-editable
          `}
        />
      </div>

    </div>

  )
}

PersonProfiles.propTypes = {
  profiles: PropTypes.array,
}


export default PersonProfiles
