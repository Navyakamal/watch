import React, { useState } from 'react'
import './Auth.css'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApis'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {

  const navigate=useNavigate()
  const [userInputs,setInputs]=useState({
    username:"",
    email:"",
    password:""
  })

  //state to check validation
  const [validUname,setValidUname]=useState(false)
  const [validemail,setValidEmail]=useState(false)
  const [validPassword,setValidPassword]=useState(false)

  const setData=(e)=>{
    const {name,value}=e.target
    if(name=="username"){
      if(value.match(/^[a-zA-Z ]+$/)){
        setValidUname(false)
        setInputs({...userInputs,[name]:value})
      }
      else{
        setValidUname(true)
      }
    }
    if(name=="email"){
      if(value.match(/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ )){
        setValidEmail(false)
        setInputs({...userInputs,[name]:value})
      }
      else{
        setValidEmail(true)
      }
    }
    if(name=="password"){
      if(value.match(/^[a-zA-Z0-9]+$/)){
        setValidPassword(false)
        setInputs({...userInputs,[name]:value})
      }
      else{
        setValidPassword(true)
      }
    }
  }

  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userInputs
    if(!username || !email || !password){
      toast.warn('Please fill all details', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });   
       }
    else{
      const result=await registerApi(userInputs)
      if(result.status==201){
        toast.success('Account created successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });     
        setInputs({...userInputs,username:"",email:"",password:""})
        navigate('/authentication')
      }
      else{
        toast.error('Account creation failed', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });        
        setInputs({...userInputs,username:"",email:"",password:""})
        console.log(result);
        navigate('/authentication')

      }

    }
  }
  
  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userInputs
    if(!email || !password){
      toast.warn('Please fill all details', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });   
    }
    else{
      const result=await loginApi(userInputs)
      if(result.status==200){
        //if login success then store username and id in local storage
        localStorage.setItem("currentUser",result.data.user.username)
        localStorage.setItem("userId",result.data.user._id)
        localStorage.setItem("token",result.data.token)

        toast.success(result.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });          setInputs({...userInputs,email:"",password:""})
        navigate('/home')
      }
      else{
        toast.error('Login failed', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });        
        setInputs({...userInputs,email:"",password:""})

      }

    }
  }
  console.log(userInputs);
  return (
    <div className='auth'>
      <div className='background'></div>
      <Container className='w-25 signin shadow'>
          <h3 className='text-center mt-4'><span className='text-danger'>Watch</span>Wise</h3>
          {register?
          <>
             <input type="text" name="username" placeholder='Enter username'  className='s1 form-control' onChange={(e)=>setData(e)} value={userInputs.username?.username}/>
          {validUname &&
               <p className='text-danger text-start my-1'>Please include alphabets and spaces only</p>
  
             }
             <input type="text" name="email" placeholder='Enter email id'  className='s1 form-control' onChange={(e)=>setData(e)} value={userInputs.email?.email}/>
             {validemail &&
               <p className='text-danger text-start my-1'>Please enter a valid email</p>
  
             }            
             <input type="password" name="password" placeholder='Enter password'  className='s1 form-control' onChange={(e)=>setData(e)} value={userInputs.password?.password}/>
             {validPassword &&
               <p className='text-danger text-start my-1'>Please include letters and numbers only</p>
  
             }
             </>
             :
             
              <>
              <input type="text" placeholder='Enter email id' name='email' className='s1 form-control' onChange={(e)=>setData(e)} value={userInputs.email?.email}/>
              {validemail &&
              <p className='text-danger text-start my-1'>Please enter a valid email</p>
    
              }
             <input type="password" placeholder='Enter password' name='password' className='s1 form-control' onChange={(e)=>setData(e)} value={userInputs.password?.password} />
            {validPassword &&
              <p className='text-danger text-start my-1'>Please include letters and numbers only</p>
    
             }
  
            </>          
            }
          {register?
            
          <>
            <button className='sb1' onClick={(e)=>handleRegister(e)}>SIGN UP</button>
            <p className='text-center mt-3'>ALREADY REGISTERED? <Link to={'/authentication'}  style={{textDecoration:'none'}}><span className='text-danger'> SIGN IN</span></Link></p>
  
          </>
          :
          <>
          <button className='sb1' onClick={(e)=>handleLogin(e)}>SIGN IN</button>
          <p className='text-center mt-3'>NEW USER?<Link to={'/register'} style={{textDecoration:'none'}}> <span className='text-danger'> SIGN UP</span></Link></p>


      </>
        }
           
        
      </Container>
      <ToastContainer />
    </div>
  )
}

export default Auth
