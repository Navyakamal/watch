import React, {  useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [username,setUsername]=useState("")

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);
   
    useEffect(()=>{
      if(localStorage.getItem("currentUser")){
        setUsername(localStorage.getItem("currentUser"))
      }
    })

  return (
    <div>
       <Navbar className={`logo ${navbar ? 'navbar-black' : 'navbar-transparent'}`} style={{position:'fixed'}}>
        <Container>
          <Navbar.Brand  style={{fontSize:'30px',fontWeight:'600',color:'white'}} className='brand'>
           {' '}
            <span className='text-danger '>Watch</span>Wise
          </Navbar.Brand>
                    <Nav className="me-auto p-1 ms-3" style={{fontSize:'20px',fontWeight:'500'}}>
              <Nav.Link className='p1 ' style={{color:'white'}}><Link to={'/'} style={{textDecoration:'none',color:'white'}}>HOME</Link></Nav.Link>
              <Nav.Link className='p1 ms-2' style={{color:'white'}}><Link to={'/movies'} style={{textDecoration:'none',color:'white'}}>MOVIES</Link></Nav.Link>
              <Nav.Link className='p1 ms-2' style={{color:'white'}}><Link to={'/search'} style={{textDecoration:'none',color:'white'}}>SEARCH</Link></Nav.Link>
                  
                       
               </Nav>
               <Navbar.Collapse className="justify-content-end">
              <Navbar.Text >
                <Link to={'/profile'}>
                           <button className='user justify-content-evenly'><i class="fa-solid fa-user"></i> <span className='ms-2  name'>{username}</span></button>
  
                </Link>         
              </Navbar.Text>
          </Navbar.Collapse>

       </Container>
      </Navbar>
    </div>
  )
}

export default Header
