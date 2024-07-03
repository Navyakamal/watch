import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import './Tab.css'
import { Edit, List, LogOut, PenTool, Trash ,Heart} from 'react-feather'

function Tab() {
  return (
    <div>
    <Container className='m-5'>
            <div className='tab'>
                <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
                  <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
                <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
                <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
                <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
                <div className='item'>
                    <List></List>
                    <p className='ms-3'>Your watchlist</p>
                </div>
            </div>
    
    </Container>  
      </div>
  )
}

export default Tab
