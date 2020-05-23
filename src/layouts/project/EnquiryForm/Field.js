import React from 'react'
import FloatingLabelItem from 'components/FloatingLabelItem'
import {styles} from './EnquiryForm'

const Field = ({as, inputClassName = ``, ...props}) => (
  <FloatingLabelItem
    {...props}
    as={as}
    className={styles.item}
    inputClassName={`${styles.input} ${inputClassName}`}
    labelClassName={``}
    labelStyles={{
      '--scale-x-var-1': `0.8`,
      '--scale-y-var-1': `0.8`,
      '--translate-x-var-1': `0`,
      '--translate-y-var-1': `0`,
      transformOrigin: `right`,
    }}
    required
  />
)

export default Field
