import React from 'react'
import logo from  '../../logo.svg'
import { Container, Nav, Navbar, Button, Row, Col, Dropdown } from 'react-bootstrap'
import './Header.css'
import Arrow from './Arrow.svg'

const Header = () => {
  return (
    <section className='header'>
<Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='Logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className='menu-pad'>services</Nav.Link>
            <Nav.Link href="#" className='menu-pad'>Clients</Nav.Link>
            <Nav.Link href="#" className='menu-pad'>About Us</Nav.Link>
            <Nav.Link href="#" className='menu-pad'>PLATFORMS</Nav.Link>
            <Button variant="primary" className='btn-blue'>Let’s Talk</Button>
            <div> <img src='assets/menu.svg' alt='menu' /></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Row className='mt-5'>
      <Col lg={6}>
          <div className='banner-caption'>
            <div className='caption-small'>
              <p>WE MAKE IT HAPPEN</p>
            </div>
            <div className='main-caption'>
              <h1><span>Learn Driving.</span><br /> 
The Digital Way.</h1>
            </div>
            <Dropdown className='pb-5'>
      <Dropdown.Toggle  id="dropdown-basic" className='drop-btn'>
      More projects <span className='ps-2'><img src={Arrow} alt='dropdown'/></span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='shadow p-1 mb-5 bg-body-tertiary rounded'>
        <Dropdown.Item href="#/action-1">Service 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Service 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Service 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          </Col>
        <Col lg={6}>
<img src='../../../assets/banner.png' alt='Banner' className='img-fluid' />
        </Col>
       
      </Row>
    </Container>
  <Container>
    
  </Container>
  </section>
  )
}

export default Header
