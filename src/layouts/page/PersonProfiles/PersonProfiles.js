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
        @mq-palm--padding-bottom:columns-0-1/2
        margin-horizontal:auto
        max-width:container
        padding-bottom:400
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
      grid-guide
        @mq-desk--grid-template-columns:var-3
        @mq-desk--padding-horizontal:columns-1-1/2
        @mq-lap--grid-gap:columns-1
        @mq-lap--grid-template-columns:var-2
        @mq-palm--grid-gap:columns-0-1/2
        @mq-palm--grid-template-columns:var-1
        @mq-palm--padding-vertical:columns-0-1/2
        display:grid
        grid-gap:500
        padding-horizontal:columns-0-1/2
        padding-top:400
        padding-bottom:800
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
          (min-width: ${mq.desk}) ${cols(4)}vw,
          (min-width: ${mq.widepalm}) ${cols(6)}vw,
          (min-width: ${mq.palm}) ${cols(5.5)}vw
        `}
      />

      <div
        className={`
          @mq-bigdesk--padding-right:columns-1
          @mq-desk--padding-right:columns-0-1/2
        `}
      >
        <h2
          className={`
            @mq-palm--margin-bottom:columns-0-1/2
            margin-bottom:400
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
              font-size:300
              font-weight:400
              text-transform:uppercase
            `}
          >
            {position}
          </span>
        </h2>

        <p
          dangerouslySetInnerHTML={{__html: note}}
          className={`
            @mq-palm--margin-bottom:columns-0-1/2
            font-size:note
            handwritten
            margin-bottom:400
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
