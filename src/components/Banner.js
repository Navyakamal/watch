import React from 'react'
import { Container } from 'react-bootstrap'
import Popular from './Popular'

function Banner() {
  return (
    <div className='banner'>
       <div className='c1'>
        <img src="https://i.postimg.cc/3xVwh9zc/dynamic-spider-man-action-desktop-wallpaper-preview.jpg" alt="" style={{width:'100%'}}
         className="banner-image"/>
      </div>
      <Container className='c2'>
          <div>
            <p style={{color:'white',fontSize:'60px'}} className='movie-title'>Movie Name</p>
            <button className='b2 mt-3 mb-4'>Category</button>
            <p style={{color:'white'}} className='movie-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At fugit<br></br> reprehenderit nihil iusto sint minima animi possimus. Adipisci quibusdam nemo, <br></br>beatae vel dolorem doloribus quis dicta tempore quam illo blanditiis.</p>
            <button className='b3 mt-3'><i class="fa-solid fa-play"></i> Watch now</button>
          </div>
      </Container>
    </div>
  )
}

export default Banner
