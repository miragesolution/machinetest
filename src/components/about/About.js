import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

function About() {

  return (
    <div className='mt-5'>
      <Container>
        <Row>
            <Col lg={8}>
<div className='about'>
  <p>
    <span className='highlight-about'>
  Innovazia is a Digital Experience Agency that delivers <span className='perform'>high performance</span> digital experiences for</span><br />
   mid-range and large
   enterprises as well as startups. 
  </p>
</div>
            </Col>
            <Col lg={4}>
<div className='contact-btn'>
  <div className='contact-icon'>
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
<circle cx="75" cy="75" r="72.5" stroke="#7F829C" stroke-width="5" stroke-dasharray="1 8"/>
</svg>
<p className='link-contact'>Contact Us</p>
 </div>
</div>
</Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
