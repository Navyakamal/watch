import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
       <Row>
        <Col lg={3}>
          <p>  <span className='text-danger'>Watch</span>Wise</p>
          <p>Discover. Watch. Enjoy.</p>
        </Col>
        <Col lg={6}className='text-center'>
          <p>Contact us</p>
          <p>watchwise@gmail.com</p>
          <p>+12 34567 56738</p>
        </Col>
        <Col lg={3}>
          <p>Follow us</p>
          <div className='d-flex'>
              <i class="fa-brands fa-facebook" id='i1'></i>
              <i class="fa-brands fa-instagram" id='i1'></i>
              <i class="fa-brands fa-twitter" id='i1'></i>
              <i class="fa-brands fa-youtube" id='i1'></i>
          </div>
        </Col>
       </Row>
       <hr />
       <Row>
          <Col className="text-center">
            <p>&copy; 2024 WatchWise. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
