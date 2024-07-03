import React from 'react'
import Aprofile from '../components/Aprofile'
import Astatistics from '../components/Astatistics'
import { Col, Container, Row } from 'react-bootstrap'
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
          <Row>
          <Col lg={2} className='mt-3'>
              <Aprofile></Aprofile>
          </Col>
          <Col lg={10} className='mt-3'>
              <Astatistics></Astatistics>
          </Col>
        </Row>
  
    </div>
  )
}

export default Dashboard

