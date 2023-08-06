import React  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Services.css'

const Services = ({data}) => {
  return (
      <div className='mt-5'>
      <Container>
        <Row>

       {data.map((item)=>(
         <>
           <Col lg={6} className='pb-100'>
             <div className='service-pic'>
               <img src={require(`./assets/${item.image}.png`)} alt='' className='img-fluid' />
             </div>
           </Col>
           <Col lg={6} className='ps-lg-5 pb-100'>
             <div className='service-info'>
               <div className='small-head'>
                 <span>{item.subhead}</span>
               </div>
               <div className='main-head'>
                 <h1>
                 {item.head}
                 </h1>
               </div>
               <div className='sub-items'>
                 <ul className='list-inline mb-0'>
                   <li>{item.desc}</li>
                 </ul>
               </div>
             </div>
           </Col>
         </>
       ))}

        </Row>
      </Container>
    </div> 
   
   
  )
}

export default Services
