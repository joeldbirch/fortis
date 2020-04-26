import React from 'react'
import LargeText from 'components/LargeText'

const styles = {
  root: `
    @mq-desk--padding-top:200
    @mq-palm--padding-bottom:columns-1
    margin-horizontal:auto
    max-width:container
    padding-bottom:1000
    padding-horizontal:columns-0-1/2
    padding-top:400
    position:relative
    width:100
  `,
}

const BigText = ({bigText}) => {
  return (
    bigText && (
      <section className={styles.root}>
        <div
          className={`
          @mq-desk--padding-horizontal:columns-1
        `}
        >
          <LargeText>{bigText}</LargeText>
        </div>
      </section>
    )
  )
}

export default BigText
