import React from 'react'
import { Col, Row} from 'react-bootstrap'
import Tab from '../components/Tab'
import Details from '../components/Details'

function Profile() {
  return (
    <div>
      <Row>
        <Col lg={2} >
            <Tab></Tab>
        </Col>
        <Col lg={10}>
            <Details></Details>
        
        </Col>
      </Row>
    </div>
  )
}

export default Profile
