import React from 'react'
import './Categories.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Categories() {
  return (
    <div className='categories'>
    <Container>
          <div>
            <h3>Comedy</h3>
          </div>
          <div className='mt-3'>
                <Card style={{ width: '18rem',height:'350px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </div>
    </Container>
    </div>
  )
}

export default Categories
