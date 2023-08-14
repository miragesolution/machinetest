import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Add.css'
const Add = () => {
  return (
    <div>
     <Row>
            <Col lg={9}>
<div className='about mt-5 caption'>
  <p>
    <span className='highlight-about'>
    Realize Your Digital Vision.</span><br />
    Let’s Talk
  </p>
</div>
            </Col>
            <Col lg={3}>
<div className='contact-btn mt-5'>
  <div className='contact-icon'>
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
<circle cx="75" cy="75" r="72.5" stroke="#7F829C" stroke-width="5" stroke-dasharray="1 8"/>
</svg>
<p className='link-contact'>Contact Us</p>
 </div>
</div>
</Col>
        </Row>
    </div>
  )
}

export default Add
