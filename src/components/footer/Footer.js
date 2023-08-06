import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="mt-5">
      <Row className="pt-5 footer">
        <Col lg={4}>
          <div className="footer-info">
            <h5>info@innovazia.com</h5>
            <p>
              <span>Tel :</span> +971 4 3966233<span> Fax :</span> +971 4
              3967306
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="address">
            Innovazia Technologies LLC,
            <br />
            Office Number #415, Hamsah Comples, Karama
            <br />
            Opposite: Ministry of External Affairs,
            <br />
            P O Box 28023 - Dubai, UAE
            <br />
            Internet city, Dubai, UAE
            <br />
          </div>
        </Col>
        <Col lg={4}>
          <div className="privacy-policy">
            <p>Privacy Policy</p>
            <span>© 2021 Innovazia Technologies LLC.</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
