import React from 'react'
import Header from '../components/Header'
import './Search.css'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

function Search() {
  return (
    <div>
      <Header></Header>
     <Container>
        <div className='search-bar'>
          <input type="text" placeholder='Search WatchWise'/>
  
          <div className='d-flex justify-content-center mt-3'>
          <Dropdown className='p-3'>
                    <Dropdown.Toggle  id="dropdown-basic">
                      Filter by category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            
                      <Dropdown className='p-3'>
                <Dropdown.Toggle  id="dropdown-basic">
                  Filter by language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                      
                      <Dropdown className='p-3'>
                <Dropdown.Toggle  id="dropdown-basic">
                  Filter by rating
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
        </div>
     </Container>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Search
