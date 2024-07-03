import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Edit, Trash } from 'react-feather';

function Astatistics() {
  return (
    <div>
      <Container className='shadow mt-5'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <p>Card Title</p>
            <div className='d-flex justify-content-end'>
              <Trash></Trash>
              <Edit className='ms-3'></Edit>
            </div>
          </Card.Body>
        </Card>
          </Container>
    </div>
  )
}

export default Astatistics
