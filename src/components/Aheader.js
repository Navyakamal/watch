import React from 'react'
import './Aheader.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Aheader() {
  return (
    <div>
      <Navbar className="bg-dark alogo">
      <Container>
      <Navbar.Brand  style={{fontSize:'30px',fontWeight:'600',color:'white'}} className='brand'>
           {' '}
            <span className='text-danger '>Watch</span>Wise
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className='a1'>HOME</button>
            <button className='a1 ms-2'><Link to={'/allmovies'} style={{textDecoration:'none',color:'white'}}>MOVIES</Link></button>
            <button className='a1 ms-2'><Link to={'/dashboard'} style={{textDecoration:'none',color:'white'}}>PROFILE</Link></button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Aheader
