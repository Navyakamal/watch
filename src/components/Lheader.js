import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Lheader.css'

function Lheader() {
  return (
    <div>
             <Navbar className='logo1' style={{position:'fixed'}}>
        <Container>
          <Navbar.Brand  style={{fontSize:'30px',fontWeight:'500',color:'white'}} className='brand'>
           {' '}
            <span className='text-danger '>Watch</span>Wise
          </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to={'/login'}>
                                  <button className='login'>LOG IN</button>
                  
                </Link>        
                <Link to={'/authentication'}>
                      <button className='b1'>SIGN IN</button>
                
              </Link>           
           </Navbar.Text>
          </Navbar.Collapse>
  
       </Container>
      </Navbar>

    </div>
  )
}

export default Lheader
