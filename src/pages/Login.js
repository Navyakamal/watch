import React, { useState} from 'react'
import './Login.css'
import { Container } from 'react-bootstrap'
import { BaseUrl } from '../services/baseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { loginApi } from '../services/allApis';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();


  const setData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleAdmin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(`${BaseUrl}/user/login`, formData); // Base URL + endpoint
  //     localStorage.setItem('token', res.data.token);
  //     const user = jwtDecode(res.data.token);
  //       if (user.role == 'admin') {

  //         const result=await loginApi(formData)
  //         localStorage.setItem("currentUser",result.data.user.username)
  //         localStorage.setItem("userId",result.data.user._id)
  //         localStorage.setItem("token",result.data.token)
  //       navigate('/dashboard')
  //       console.log(user);

  //     } else {
  //       alert('Access denied: Admins only');
  //       console.log(user);

  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert('Invalid credentials');
  //   }
  // };

  const handleAdmin=async(e)=>{
    e.preventDefault();
    const { email, password } = formData;
    if(!email || !password){
      alert('please fill all details')  
    }
    else{
      const result=await loginApi(formData)
      localStorage.setItem('token', result.data.token);
      const user = jwtDecode(result.data.token);
      if(user.role == 'admin'){
        localStorage.setItem("currentUser",result.data.user.username)
        localStorage.setItem("userId",result.data.user._id)
        localStorage.setItem("token",result.data.token)
        navigate('/dashboard')
        console.log(user);

      }
      else {
        alert('Access denied: Admins only');
        console.log(user);
      }
    } 
  }
  return (
    <div>
          <div className='admin-login'>
      <div className='background'></div>
      <Container className='w-25 signin shadow'>
          <h3 className='text-center mt-4'><span className='text-danger'>Watch</span>Wise</h3>
          <input type="text" name="email" placeholder='Enter email id'  className='s1 form-control' onChange={(e)=>setData(e)}/>
          <input type="password" name="password" placeholder='Enter password'  className='s1 form-control' onChange={(e)=>setData(e)} />
          <button className='sb1 mb-5' onClick={handleAdmin}>SIGN IN</button>
            
         
      </Container>
    </div>

    </div>
  )
}

export default Login
