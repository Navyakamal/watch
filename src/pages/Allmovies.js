import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Allmovies.css'
import Aheader from '../components/Aheader';
import { Edit,Trash } from 'react-feather';
function Allmovies() {
  return (
    <div>
      <Aheader></Aheader>
      <Container>
         <Card style={{ width: '18rem', }} className='mt-5'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <p>Card Title</p>
        </Card.Body>
        <div className='d-flex justify-content-end'>
            <Edit></Edit>
            <Trash className='ms-3'></Trash>
        </div>
      </Card>
  
      </Container>  
        </div>
  )
}

export default Allmovies
