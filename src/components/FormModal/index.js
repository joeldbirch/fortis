import React from 'react'
import Modal from 'react-modal'
import './_index.scss'

const styles = {
  overlay: {
    backgroundColor: "hsla(25, 15%, 85%, 0.8)",
    display: "flex",
    alignItems: "center",
    backdropFilter: "blur(3px)",
    padding: `3.5vw`,
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: "3rem",
    border: 0,
    backgroundColor: "#f5f2ed",
    boxShadow: `
      0 1px 0 rgba(0, 0, 0, 0.045),
      0 1px 1px rgba(0, 0, 0, 0.045),
      0 2px 2px rgba(0, 0, 0, 0.045),
      0 4px 4px rgba(0, 0, 0, 0.045)
    `,
  }
}

Modal.setAppElement('#___gatsby')

export default ({children, className, ...props}) => {
  return (
    <Modal
      { ...props }
      style={styles}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={400}
    >
      { children }
    </Modal>
  )
}
