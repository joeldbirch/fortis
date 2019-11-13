import React from 'react'
import PropTypes from 'prop-types'

function NetlifyForm({ name, action, className, children }) {
  return (
    <form
      action={action}
      className={className}
      data-netlify-honeypot="if-valid-user"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
      method="POST"
      name={name}
    >
      {children}
      <div className="display:none">
        <label>
          Don’t fill this out if you’re human: <input name="if-valid-user" />
        </label>
        <input type="hidden" name="form-name" value={name} />
      </div>
    </form>
  )
}

NetlifyForm.propTypes = {
  name: PropTypes.string,
  action: PropTypes.string,
}

NetlifyForm.defaultProps = {
  name: 'Contact',
  action: '/thank-you/',
}

export default NetlifyForm
