import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Aprofile.css'
import { addMovieApi } from '../services/allApis';

function Aprofile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [preview,setPreview]=useState("")

  const [movieInputs,setMovieInputs]=useState({
    title:"", description:"", director:"", 
    language:"", genre:"", videoUrl:"", 
    rating :"",coverImg:""
  })

  const setInputs=(e)=>{
    const {name,value}=e.target
    setMovieInputs({...movieInputs,[name]:value})
  }
  const setVideoUrl=(e)=>{
    let {value,name}=e.target
    //https://www.youtube.com/watch?v=HUAAYwtusLI
    //https://www.youtube.com/embed/HUAAYwtusLI
    var newValue=`https://www.youtube.com/embed/${value.slice(-11,)}`
    setMovieInputs({...movieInputs,[name]:newValue})
  }
  const handleAdd=async(e)=>{
    e.preventDefault()
    const {title,description,director,language,genre,videoUrl,rating,coverImg}=movieInputs
    if(!title || !description || !director || !language || !genre || !videoUrl || !rating || !coverImg ){
      alert('please fill all datas')
    }
    else{
      //header token
      if(localStorage.getItem("token")){
        const token=localStorage.getItem("token")
        const headerConfig={
          "Content-Type":"multipart/form-data",
          "access_token":`Bearer ${token}`
        }
        //body - form data
        const reqBody=new FormData()
        reqBody.append("title",title)
        reqBody.append("description",description)
        reqBody.append("director",director)
        reqBody.append("language",language)
        reqBody.append("genre",genre)
        reqBody.append("videoUrl",videoUrl)
        reqBody.append("rating",rating)
        reqBody.append("coverImg",coverImg)

       const result=await addMovieApi(reqBody,headerConfig)
       console.log(result);

      }


      
    }
  }
  //image preview generation from file image
  useEffect(()=>{
      if(movieInputs.coverImg){
        setPreview(URL.createObjectURL(movieInputs.coverImg))
      }
      else{
        setPreview("")
      }
  },[movieInputs.coverImg])
  console.log(movieInputs);
  console.log(preview);

  return (
    <div className='sidebar bg-dark text-white p-3'>
      <p className='text-center' style={{fontSize:'30px'}}>Admin Panel</p>
      <Nav className="flex-column text-center">
        <Nav.Item>
          <Nav.Link className="text-white n1" onClick={handleShow}>Add a movie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className="text-white n1">Log out</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link as={Link} to="/movies" className="text-white">Movie Management</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/statistics" className="text-white">Statistics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/recommendations" className="text-white">Recommendations</Nav.Link>
        </Nav.Item> */}
      </Nav> 
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a movie</Modal.Title>
      </Modal.Header>
      <Form >
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" id="name" name='title' onChange={(e)=>setInputs(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="language">Language</Form.Label>
            <Form.Control type="text" id="language" name='language' onChange={(e)=>setInputs(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="text" id="description" name='description'  onChange={(e)=>setInputs(e)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="director">Director</Form.Label>
            <Form.Control type="text" id="director" name='director' onChange={(e)=>setInputs(e)}  />
          </Form.Group>
          <div className="d-flex">

          <Form.Group className="me-2 flex-grow-1">
            <Form.Label htmlFor="Genre">Genre</Form.Label>
            <Form.Control type="text" id="Genre" name='genre' onChange={(e)=>setInputs(e)}/>
          </Form.Group>
            <Form.Group className="me-2 flex-grow-1">
              <Form.Label htmlFor="rating">Rating</Form.Label>
              <Form.Control type="text" id="rating" name='rating' onChange={(e)=>setInputs(e)} />
            </Form.Group>
          </div>
          <div className="d-flex mt-3">
          
            <label htmlFor="p1">
              <input type="file" name="coverImg" id="p1" style={{display:'none'}} onChange={(e)=>setMovieInputs({...movieInputs,["coverImg"]:e.target.files[0]})} />
              <img className='w-100' src={preview?preview:"https://i.postimg.cc/s2bqL2PV/istockphoto-931643150-612x612.jpg"} alt="" style={{height:'100px'}}/>
            </label>
            <Form.Group className="flex-grow-1 ms-4">
              <Form.Label htmlFor="videoUrl">Video URL</Form.Label>
              <Form.Control type="text" id="videoUrl" name='videoUrl' onChange={(e)=>setVideoUrl(e)} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={(e)=>handleAdd(e)}>
            Add movie
          </Button>
        </Modal.Footer>
      </Form>
    </Modal> 
    </div>
  )
}

export default Aprofile
