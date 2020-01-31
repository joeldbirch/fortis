import React from 'react'
import PropTypes from 'prop-types'
import FluidImage from 'components/FluidImage'
import { subhead, handwritten } from 'styles/helpers'

const PersonProfiles = ({profiles=[]}) => {
  if (profiles.length < 1) return ``
  return (
    <div
      className={`
        padding-bottom:400
        @mq-palm--padding-bottom:columns-0-1/2
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
        grid-gap:columns-0-1/2
        @mq-widepalm--grid-gap:columns-1
        @mq-palm--display:grid
        @mq-palm--grid-template-columns:var-1
        @mq-widepalm--grid-template-columns:var-2
        @mq-desk--grid-template-columns:var-3
      `}
      style={{
        '--grid-template-columns-var-1': `5.5fr 6fr`,
        '--grid-template-columns-var-2': `6fr 5fr`,
        '--grid-template-columns-var-3': `5fr 4fr`,
      }}
    >

        <FluidImage
          image={image}
          className={`
            @mq-max-palm--width:columns-5
            @mq-max-palm--margin-left:columns-1
            @mq-max-palm--margin-bottom:columns-0-1/2
            float:right
          `}
        />

      <div
        className={`
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
              @mq-bigdesk--font-size:400
              font-weight:400
            `}
          >
            {position}
          </span>
        </h2>

        <p
          dangerouslySetInnerHTML={{__html: note}}
          className={`
            ${handwritten}
            margin-bottom:400
            @mq-palm--margin-bottom:columns-0-1/2
          `}
        />

        <div
          dangerouslySetInnerHTML={{__html: description}}
          className={`
            s-editable
            @mq-bigdesk--font-size:500
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