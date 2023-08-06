import React, { useState } from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import './Faq.css'

const Faq = ({faqItems}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const itemClick = (index)=> {
  setActiveIndex(index === activeIndex ? null : index );
  };

  return (
    <div className='mt-5'>
      <Container>
        <Row>
            <Col className='faq'>
            <h1 className='head'>FAQ</h1>
            <Accordion defaultActiveKey="0" flush>
              <>
              {faqItems.map((item, index) =>(
                     <div key={index} className="accordion-item">
                      <div
               className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => itemClick(index)}
             >
                      {item.title}
                      <span className="accordion-icon">
                 {activeIndex === index ? '-' : '+'}
               </span>
                      </div>
                      {activeIndex === index && (
                       <div className="accordion-content">
                        {item.content}
                      </div>
                      )}
                    </div>
          //           <div key={index} className="accordion-item">
          //   <div
          //     className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
          //     onClick={() => ItemClick(index)}
          //   >
          //     {item.title}
          //     <span className="accordion-icon">
          //       {activeIndex === index ? '-' : '+'}
          //     </span>
          //   </div>
          //   {activeIndex === index && (
          //     <div className="accordion-content">
          //       {item.content}
          //     </div>
          //   )}
          // </div>
              ) )}
</>
    </Accordion>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
