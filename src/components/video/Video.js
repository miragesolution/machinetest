import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Video.css'
import VideoPopup from './VideoPopup'

const Video = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const openVideoPopup = () => {
    setisModalOpen(true);
  }

  const closeVideoPopup = () => {
    setisModalOpen(false);
  }

  const videoUrl = 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0';

  return (
    <>
    <div className='mt-5'>
      <Row>
        <Col>
        <div className='play-vdo mt-5'>
<div className='play-button d-flex  align-items-center'>
    <button className='btn' onClick={openVideoPopup}><img  src='../../../assets/play-icon.svg' alt='video' /></button>
    <VideoPopup isOpen={isModalOpen} onClose={closeVideoPopup} videoUrl={videoUrl} />
    <div className='vdo-caption'>
        <p className='mb-0 text-white ps-3'>
        See what<br/> Delmonte saying<br/> about us
        </p>
    </div>
</div>
        </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Video
