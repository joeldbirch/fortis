import React from 'react'
import Modal from 'react-modal'
import './_index.scss'

const styles = {
  overlay: {
    backgroundColor: "rgba(249, 243, 240, 0.9)",
    display: "flex",
    alignItems: "center",
    transition: ".15s"
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: "1rem",
    border: 0
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
      closeTimeoutMS={2000}
    >
      { children }
    </Modal>
  )
}
