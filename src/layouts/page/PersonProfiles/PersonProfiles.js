import React from 'react'

const PersonProfiles = ({
  profiles
  // : {
  //   group1: {
  //     start: {
  //       image,
  //     },
  //     end: {
  //       name,
  //       title,
  //       note,
  //       description,
  //     },
  //   },
  // },
}) => {
  if (profiles.length < 1) return ``

  return (
    <div>
      {profiles.map(profile => (
        <h2>{profile.group1.end.name}</h2>
      ))}
    </div>
  )
}

export default PersonProfiles
