import React from 'react'
import  Modal from 'react-modal'
import './Video.css'
import { CloseButton } from 'react-bootstrap'

const VideoPopup = ({isOpen, onClose, videoUrl}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
    >
      <div className='popup'>
      <div className="popup-content">
        <button className='close-button' onClick={onClose}>
        <CloseButton />
        </button>
        <iframe
          title="Video"
          width="100%"
          height="100%"
          src={videoUrl}
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </Modal>
  )
}

export default VideoPopup
